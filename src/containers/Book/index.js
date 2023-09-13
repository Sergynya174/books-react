import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./Book.scss";
import { getBookCard } from "../../store/books/selectors";
import { getBook } from "../../store/books";
import { useDispatch, useSelector } from "react-redux";

const Book = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(getBookCard);

  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <div className="book-container">
        <div className="book-containerImg">
          <img
            className="book-img"
            src={book?.volumeInfo.imageLinks.thumbnail}
            alt="book"
          />
        </div>
        <div className="book-containerInfo">
          <p className="book-textCategories">{book?.volumeInfo.categories}</p>
          <h1 className="book-title">{book?.volumeInfo.title}</h1>
          <p className="book-textAuthors">{book?.volumeInfo.authors}</p>
          <div className="book-containerDescription">
            <p className="book-textDescription">
              {book?.volumeInfo.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
