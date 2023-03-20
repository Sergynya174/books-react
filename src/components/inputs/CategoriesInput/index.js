import React from "react";
import styles from "./CategoriesInput.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//import { searchRoutes } from "../../../store/routes";
import { useNavigate } from "react-router-dom";

const CategoriesInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    (async () => {
      //await dispatch(searchRoutes(data.books));
      navigate("/search-result");
    })();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerInput}>
      <select className={styles.select} id="categories">
        <option value="all">all</option>
        <option value="art">art</option>
        <option value="biography">biography</option>
        <option value="computers">computers</option>
        <option value="history">history</option>
        <option value="medical">medical</option>
        <option value="poetry">poetry</option>
      </select>
    </form>
  );
};

export default CategoriesInput;
