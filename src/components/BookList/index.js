import React from "react";
import CardBook from "../CardBook";
import { useSelector } from "react-redux";
import styles from "./BookList.module.css";
import { getBooksCard } from "../../store/books/selectors";
import { map } from "lodash";

const BookList = () => {
  const books = useSelector(getBooksCard);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Found {books?.length} result</h2>
      <div className={styles.cardContainer}>
        {map(books, (item) => {
          return <CardBook key={item.id} card={item} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
