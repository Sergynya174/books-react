import { useEffect } from "react";
import CardBook from "../CardBook";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookList.module.css";
import { getBooks } from "../../store/books";
import { getBooksCard } from "../../store/books/selectors";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(getBooksCard);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>Found {books?.length} result</h2>
      {books?.map((item) => {
        console.log(item);
        <CardBook card={item} />;
      })}
    </div>
  );
};

export default BookList;
