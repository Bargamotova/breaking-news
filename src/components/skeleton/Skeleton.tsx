import { SkeletonType } from "../../interfaces";
import styles from "./styles.module.css";
interface Props {
  type?: SkeletonType;
  count?: number;
}
const Skeleton = ({ count = 1, type = "banner" }: Props) => {
  return (
    <div className={styles.skeleton}>
      {count > 1 ? (
        <ul className={styles.skeleton__list}>
          {[...new Array(count)].map((_, idx) => (
            <li
              key={idx}
              className={
                type === "banner"
                  ? styles.skeleton__banner
                  : styles.skeleton__item
              }
            ></li>
          ))}
        </ul>
      ) : (
        <ul
          className={
            type === "banner"
              ? styles.skeleton__list_banner
              : styles.skeleton__list
          }
        >
          <li
            className={
              type === "banner"
                ? styles.skeleton__banner
                : styles.skeleton__item
            }
          ></li>
        </ul>
      )}
    </div>
  );
};

export default Skeleton;
