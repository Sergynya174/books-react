import { useState, useEffect } from "react";
import CardBook from "../CardBook";
import { useSelector } from "react-redux";
import styles from "./BookList.module.css";
import { getBooksCard } from "../../store/books/selectors";
import { map } from "lodash";

const BookList = () => {
  const books = useSelector(getBooksCard);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [page, setPage] = useState(1);
  const step = 30;

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const end = page * step;
    const newBooks = books?.slice(0, end);
    setDisplayedBooks(newBooks);
  }, [books, page]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Found {books?.length} result</h2>
      <div className={styles.cardContainer}>
        {map(displayedBooks, (item, index) => {
          return <CardBook key={index} card={item} />;
        })}
      </div>
      {books?.length > 30 && displayedBooks?.length < books?.length && (
        <div className={styles.pagination}>
          <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default BookList;
