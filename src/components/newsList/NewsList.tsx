import styles from "./styles.module.css";
import NewsItem from "../newsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";

interface Props {
  news: INews[];
  scroll?: boolean;
}
const NewsList = ({ news, scroll }: Props) => {
  const newsSortWithoutImage = news?.filter((el: INews) => {
    return el.image === "None";
  });

  const newsSortWithImage = news?.filter((el: INews) => {
    return el.image !== "None";
  });
  return (
    <>
      <div
        className={styles.list}
        // style={
        //   newsSortWithoutImage.length > 0
        //     ? { display: "grid" }
        //     : { display: "none", marginBottom: "0" }
        // }
      >
        {newsSortWithoutImage?.map((item: INews) => (
          <NewsItem item={item} key={item.id} type="" />
        ))}
      </div>
      <div className={scroll ? styles.list_carousel : styles.list}>
        {newsSortWithImage?.map((item: INews) => (
          <NewsItem item={item} key={item.id} type={scroll ? "" : "hasImg"} />
        ))}
      </div>
    </>
  );
};
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);
export default NewsListWithSkeleton;
