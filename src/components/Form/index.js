import React from "react";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getBooks } from "../../store/books";

const Form = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

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
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
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
