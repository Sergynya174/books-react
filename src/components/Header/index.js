import React from "react";
import styles from "./Header.module.css";
import SearchInput from "../../components/inputs/SearchInput";
import CategoriesInput from "../../components/inputs/CategoriesInput";
import SortingInput from "../../components/inputs/SortingInput";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Search for books</h1>
      <SearchInput />
      <div className={styles.containerInputs}>
        <div className={styles.containerInput}>
          <p className={styles.text}>Categories</p>
          <CategoriesInput />
        </div>
        <div className={styles.containerInput}>
          <p className={styles.text}>Sorting by</p>
          <SortingInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
