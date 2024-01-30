import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={styles.pagination__arrow}
      >
        {"<"}
      </button>
      <div className={styles.pagination__btns}>
        {[...Array(totalPages)].map((_, idx) => {
          return (
            <button
              onClick={() => handlePageClick(idx + 1)}
              className={
                idx + 1 === currentPage
                  ? styles.pagination__active
                  : styles.pagination__btn
              }
              disabled={idx + 1 === currentPage}
              key={idx}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.pagination__arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
