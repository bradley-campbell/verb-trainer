import React, { useState, useContext } from "react";
import { Input, Form, Button } from "semantic-ui-react";

import { QueryContext } from "../context/QueryContext";

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

  const handleSubmit = () => {
    handleFetch();
  };

  return (
    <div style={wrapperStyle}>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => {
            setQuery({ ...query, verb: e.target.value });
          }}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default FilterResults;
