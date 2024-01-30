import styles from "./styles.module.css";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Slider from "../slider/Slider";
import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Menu from "../menu/Menu";

interface Props {
  filters: IFilters;
}
const Filters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
      {data ? (
        <Slider>
          <Categories
            categories={data?.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}
      {data ? (
        <Menu
          categories={data?.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            dispatch(setFilters({ key: "category", value: category }))
          }
        />
      ) : null}
    </div>
  );
};

export default Filters;
