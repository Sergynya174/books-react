import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CardBook.scss";
import { getBook } from "../../store/books";

const CardBook = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getBook(card.id));
    navigate(`/${card.id}`);
  };

  return (
    <div onClick={handleClick} className="card">
      <img
        className="img"
        src={card?.volumeInfo.imageLinks?.thumbnail}
        alt="book"
      />
      <div className="containerInfo">
        <p className="categorie">{card.volumeInfo.categories}</p>
        <h2 className="title">{card.volumeInfo.title}</h2>
        <p className="author">{card.volumeInfo.authors}</p>
      </div>
    </div>
  );
};

export default CardBook;
