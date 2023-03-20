import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getBooks } from "../../../store/books";
import { useNavigate } from "react-router-dom";
import styles from "./SortingInput.module.css";

const SortingInput = () => {
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
      <select {...register("sorting")} className={styles.select} id="sorting">
        <option value="relevance ">relevance </option>
        <option value="newest">newest</option>
      </select>
    </form>
  );
};

export default SortingInput;
