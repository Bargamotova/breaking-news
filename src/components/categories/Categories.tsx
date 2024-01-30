import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.cat}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={
            !selectedCategory ? styles.cat__btn_active : styles.cat__btn
          }
        >
          Latest
        </button>
        {categories.map((catEl, idx) => (
          <button
            onClick={() => setSelectedCategory(catEl)}
            className={
              selectedCategory === catEl
                ? styles.cat__btn_active
                : styles.cat__btn
            }
            key={idx}
          >
            {catEl}
          </button>
        ))}
      </div>
    );
  }
);
// Categories.displayName = "Categories";
export default Categories;
