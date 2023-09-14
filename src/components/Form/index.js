import { useState, useEffect } from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getBooks } from "../../store/books";

const Form = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const [currentTopic, setCurrentTopic] = useState("");

  useEffect(() => {
    if (currentTopic === "") {
      dispatch(
        getBooks({ book: "react", categories: "all", sorting: "relevance" })
      );
    } else {
      dispatch(
        getBooks({
          book: currentTopic,
          categories: "all",
          sorting: "relevance",
        })
      );
    }
  }, [dispatch, currentTopic]);

  const onSubmit = (data) => {
    (async () => {
      if (data.book !== "") {
        await dispatch(getBooks(data));
      }
    })();
  };

  const handleTopicChange = (e) => {
    setCurrentTopic(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-containerInputs">
        <input
          className="form-input"
          {...register("book")}
          onChange={handleTopicChange}
          value={currentTopic}
          placeholder="Введите название книги"
        />
        <button type="submit" className="form-button" />
      </div>
      <div className="form-container">
        <div className="form-containerInput">
          <p className="form-text">Categories</p>
          <select
            {...register("categories")}
            className="form-select"
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
        <div className="form-containerInput">
          <p className="form-text">Sorting by</p>
          <select {...register("sorting")} className="form-select" id="sorting">
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
