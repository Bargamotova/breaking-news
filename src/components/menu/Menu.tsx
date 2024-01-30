import styles from "./styles.module.css";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Menu = ({ categories, setSelectedCategory, selectedCategory }: Props) => {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menu__title}>Categories</h2>
      <ul className={styles.menu__list}>
        <li
          onClick={() => setSelectedCategory(null)}
          className={
            !selectedCategory ? styles.menu__item_active : styles.menu__item
          }
        >
          <span
            className={
              !selectedCategory
                ? styles.menu__item_categ_active
                : styles.menu__item_categ
            }
          >
            Latest
          </span>
        </li>
        {categories.map((catEl, idx) => (
          <li
            className={
              selectedCategory === catEl
                ? styles.menu__item_active
                : styles.menu__item
            }
            onClick={() => setSelectedCategory(catEl)}
            key={idx}
          >
            <span
              className={
                selectedCategory === catEl
                  ? styles.menu__item_categ_active
                  : styles.menu__item_categ
              }
            >
              {catEl}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
