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

const FilterResults = ({ handleFetch }) => {
  const {
    options: { mood, tense, person },
    query,
    setQuery,
  } = useContext(QueryContext);

  const yooo = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    handleFetch();
  };

  return (
    <div style={wrapperStyle}>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => {
            setQuery({ ...query, verb: e.target.value });
            dispatch(setVerb(e.target.value));
            console.log(yooo);
          }}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default FilterResults;
