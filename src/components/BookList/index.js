import React from "react";
import CardBook from "../CardBook";
import { useSelector } from "react-redux";
import "./BookList.scss";
import { map } from "lodash";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const BookList = ({ books, displayedBooks, handleLoadMore }) => {
  const loaders = useSelector((state) => state.books.loaders.common);
  return (
    <div className="bookList-container">
      {loaders ? (
        <div className="bookList-loadContainer">
          <div className="bookList-loader"></div>
        </div>
      ) : (
        <>
          <h2 className="bookList-title">Found {books?.totalItems} result</h2>
          <TransitionGroup className="bookList-cardContainer">
            {map(books?.items, (item, index) => {
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
        </>
      )}
      {books?.totalItems > 30 && (
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
