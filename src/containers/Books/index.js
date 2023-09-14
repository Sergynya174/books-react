import { useState } from "react";
import Header from "../../components/Header";
import BookList from "../../components/BookList";
import { getBooksCard } from "../../store/books/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../store/books";

const Books = () => {
  const books = useSelector(getBooksCard);
  const [requestData, setRequestData] = useState({});
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const maxResults = 30;

  const handleLoadMore = async (evt) => {
    evt.preventDefault();
    const nextPage = page + 1;
    setPage(nextPage);
    const startIndex = (nextPage - 1) * maxResults;
    dispatch(getBooks({ ...requestData, start: startIndex }));
  };

  const onSubmit = (data) => {
    (async () => {
      if (data.book !== "") {
        data.start = 0;
        setRequestData(data);
        setPage(1);
        await dispatch(getBooks({ ...data, start: 0 }));
      }
    })();
  };

  return (
    <>
      <Header onSubmit={onSubmit} />
      <BookList handleLoadMore={handleLoadMore} books={books} />
    </>
  );
};

export default Books;
