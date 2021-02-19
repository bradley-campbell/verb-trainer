import React, { useState, useContext } from "react";
import { Input, Form, Button } from "semantic-ui-react";

import QueryContext from "../context/QueryContext";

import { useSelector, useDispatch } from "react-redux";

import { setVerb } from "../redux/verbQuerySlice";

// const submitButtonStyles = {
//   backgroundColor: "#bc5200",
//   color: "white",
// };

const wrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: window.innerWidth > 700 ? "row" : "column",
};

const SearchBar = ({ handleFetch }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    handleFetch();
  };

  return (
    <div style={wrapperStyle}>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => {
            dispatch(setVerb(e.target.value));
          }}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBar;
