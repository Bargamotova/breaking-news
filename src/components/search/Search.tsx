import React from "react";
import styles from "./styles.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={styles.search}
      style={
        open
          ? { transform: "translateX(0)" }
          : { transform: " translateX(91%)" }
      }
    >
      <button className={styles.search__btn_open} onClick={() => setOpen(true)}>
        <IoSearchOutline className={styles.search__open} />
      </button>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button
        className={styles.search__btn_close}
        onClick={() => setOpen(false)}
      >
        <IoCloseOutline className={styles.search__close} />
      </button>
    </div>
  );
};

export default Search;
