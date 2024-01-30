import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../image/Image";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";

interface Props {
  banner: INews;
}
const Banner = ({ banner }: Props) => {
  let imageExist;
  if (banner) {
    imageExist = banner?.image.length > 4;
  }
  return (
    <article className={styles.banner}>
      <div className={styles.banner__info}>
        <h3 className={styles.banner__title}>{banner?.title}</h3>

        <p className={styles.banner__extra}>
          {formatTimeAgo(banner?.published)} by {banner?.author}
        </p>
      </div>
      {imageExist ? <Image image={banner?.image} /> : ""}
    </article>
  );
};

const BannerWithSkeleton = withSkeleton(Banner, "banner", 1);

export default BannerWithSkeleton;
