import React from "react";
import styles from "./CardBook.module.css";

const CardBook = ({ card }) => {
  console.log(card);
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={card?.volumeInfo.imageLinks.thumbnail}
        alt="book"
      />
      <div className={styles.containerInfo}>
        <p className={styles.categorie}>{card?.volumeInfo}</p>
        <h2 className={styles.title}>{card?.volumeInfo}</h2>
        <p className={styles.author}></p>
      </div>
    </div>
  );
};

export default CardBook;
