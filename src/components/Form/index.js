import React from "react";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getBooksCard } from "../../store/books/selectors";
import { getBooks } from "../../store/books";

const Form = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const books = useSelector(getBooksCard);

  const onSubmit = (data) => {
    (async () => {
      if (data.book !== "") {
        await dispatch(getBooks(data));
      }
    })();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.containerInputs}>
        <input
          className={styles.input}
          {...register("book")}
          placeholder="Введите название книги"
        />
        <button type="submit" className={styles.button} />
      </div>
      <div className={styles.container}>
        <div className={styles.containerInput}>
          <p className={styles.text}>Categories</p>
          <select
            {...register("categories")}
            className={styles.select}
            id="categories"
          >
            <option value="partial">partial</option>
            <option value="full">full</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="ebooks">ebooks</option>
          </select>
        </div>
        <div className={styles.containerInput}>
          <p className={styles.text}>Sorting by</p>
          <select
            {...register("sorting")}
            className={styles.select}
            id="sorting"
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
