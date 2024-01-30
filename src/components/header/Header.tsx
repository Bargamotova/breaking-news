import React from "react";
import styles from "./styles.module.css";
import { formatDate } from "../../helpers/formatDate";
import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    setDate(formatDate(new Date()));
  }, [date]);

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.title}>BREAKING NEWS</h1>
        <div className={styles.info}>
          <p className={styles.date}>{date.replace(", ", ` `)}</p>
          <img
            role="button"
            title="Theme"
            onClick={toggleTheme}
            className={styles.image}
            src={isDark ? themeIcons.light : themeIcons.dark}
            alt="switch-theme"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
