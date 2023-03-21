import React from "react";
import styles from "./Header.module.css";
import Form from "../../components/Form";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Search for books</h1>
      <Form />
    </div>
  );
};

export default Header;
