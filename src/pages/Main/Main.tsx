import styles from "./styles.module.css";
import LatestNews from "../../components/latestNews/LatestNews";
import NewsByFilter from "../../components/newsByFilter/NewsByFilter";
import Line from "../../components/line/Line";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const Main = () => {
  const { isLoading } = useGetLatestNewsQuery(null);
  return (
    <>
      <main className={styles.main}>
        <NewsByFilter />
        <Line />
        <LatestNews isLoading={isLoading} />
      </main>
    </>
  );
};

export default Main;
