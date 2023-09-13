import { useState, useEffect } from "react";
import CardBook from "../CardBook";
import { useSelector } from "react-redux";
import "./BookList.scss";
import { getBooksCard } from "../../store/books/selectors";
import { map } from "lodash";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const BookList = () => {
  const books = useSelector(getBooksCard);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [page, setPage] = useState(1);
  const step = 30;

  const loaders = useSelector((state) => state.books.loaders.common);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const end = page * step;
    const newBooks = books?.slice(0, end);
    setDisplayedBooks(newBooks);
  }, [books, page]);

  return (
    <div className="bookList-container">
      <h2 className="bookList-title">Found {books?.length} result</h2>
      {loaders ? (
        <div className="bookList-loadContainer">
          <div className="bookList-loader"></div>
        </div>
      ) : (
        <TransitionGroup className="bookList-cardContainer">
          {map(displayedBooks, (item, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={1000}
                classNames="card-animation"
              >
                <CardBook key={index} card={item} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
      {books?.length > 30 && displayedBooks?.length < books?.length && (
        <div className="bookList-pagination">
          <button onClick={handleLoadMore} className="bookList-loadMoreBtn">
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default BookList;
