import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./CardBook.module.css";
import { getBook } from "../../store/books";

const CardBook = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getBook(card.id));
    navigate(`/book/${card.id}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <img
        className={styles.img}
        src={card?.volumeInfo.imageLinks.thumbnail}
        alt="book"
      />
      <div className={styles.containerInfo}>
        <p className={styles.categorie}>{card.volumeInfo.categories}</p>
        <h2 className={styles.title}>{card.volumeInfo.title}</h2>
        <p className={styles.author}>{card.volumeInfo.authors}</p>
      </div>
    </div>
  );
};

export default CardBook;
