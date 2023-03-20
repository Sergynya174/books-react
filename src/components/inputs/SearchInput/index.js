import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SearchInput.module.css";
import { getBooks } from "../../../store/books";

const SearchInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    (async () => {
      await dispatch(getBooks(data));
    })();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerInput}>
      <input
        className={styles.input}
        {...register("book")}
        placeholder="Введите название книги"
      />
      <button type="submit" className={styles.button} />
    </form>
  );
};

export default SearchInput;
