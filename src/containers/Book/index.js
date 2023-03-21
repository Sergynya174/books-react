import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./Book.module.css";
import { getBookCard } from "../../store/books/selectors";
import { getBook } from "../../store/books";
import { useDispatch, useSelector } from "react-redux";

const Book = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(getBookCard);

  useEffect(() => {
    dispatch(getBook(id));
  }, [id]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <img
            className={styles.img}
            src={book?.volumeInfo.imageLinks.thumbnail}
            alt="book"
          />
        </div>
        <div className={styles.containerInfo}>
          <p className={styles.textCategories}>{book?.volumeInfo.categories}</p>
          <h1 className={styles.title}>{book?.volumeInfo.title}</h1>
          <p className={styles.textAuthors}>{book?.volumeInfo.authors}</p>
          <div className={styles.containerDescription}>
            <p className={styles.textDescription}>
              {book?.volumeInfo.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
