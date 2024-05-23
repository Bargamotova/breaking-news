import styles from './styles.module.css';
import NewsList from '../newsList/NewsList';
import { TOTAL_PAGES } from '../../constant/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import Filters from '../newsFilters/NewsFilters';
import Title from '../title/Title';
import Banner from '../banner/Banner';
import PaginationWrapper from '../paginationWrapper/PaginationWrapper';
import Line from '../line/Line';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

const NewsByFilter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);
  console.log(news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);
  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  //PAGINATION
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 }),
      );
    }
  };
  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 }),
      );
    }
  };
  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={styles.section_news}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Filters filters={filters} />
          <Title title={filters.category ? filters.category : 'Word news'} />
          <Banner isLoading={isLoading} banner={news && news[0]} />
          <Line />
          <PaginationWrapper
            top={false}
            bottom={true}
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            currentPage={filters.page_number}
          >
            <NewsList isLoading={isLoading} news={news} />
          </PaginationWrapper>
        </div>
      </div>
    </section>
  );
};

export default NewsByFilter;
