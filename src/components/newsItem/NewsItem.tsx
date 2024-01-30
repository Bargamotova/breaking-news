import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../interfaces";

interface Props {
  item: INews;
  type: string;
}
const NewsItem = ({ item, type }: Props) => {
  const imageExist = item.image.length <= 4;

  return (
    <article className={type === "hasImg" ? styles.item_hasImg : styles.item}>
      <div
        className={styles.item_wrapper}
        style={
          !imageExist
            ? { backgroundImage: `url('${item.image}')`, aspectRatio: 2 / 1 }
            : { background: "none", aspectRatio: 0 }
        }
      ></div>

      <div className={styles.info}>
        <h3 className={styles.title}> {item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item?.author}
        </p>
      </div>
    </article>
  );
};

export default NewsItem;
