import styles from "./styles.module.css";

const Burger = () => {
  return (
    <button className={styles.burger}>
      <span className={styles.burger__inner}></span>
    </button>
  );
};

export default Burger;
