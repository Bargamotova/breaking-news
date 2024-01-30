import styles from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import Banner from "../banner/Banner";
import NewsList from "../newsList/NewsList";
import Title from "../title/Title";
import Line from "../line/Line";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.latest_section}>
      <Title title="Latest" />
      {data ? (
        <Banner isLoading={isLoading} banner={data && data?.news[0]} />
      ) : null}

      <Line />
      {data ? (
        <NewsList
          isLoading={isLoading}
          news={data && data.news}
          scroll={true}
        />
      ) : null}
      <Line />
    </section>
  );
};

const LatestNewsWithSkeleton = withSkeleton(LatestNews, "banner", 1);

export default LatestNewsWithSkeleton;
