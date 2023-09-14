import React from "react";
import "./Header.scss";
import Form from "../../components/Form";

const Header = ({ onSubmit }) => {
  return (
    <div className="header">
      <h1 className="h1">Search for books</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Header;
