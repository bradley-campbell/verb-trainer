import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { QueryContext } from "../QueryContext";

const Input = ({ placeholder, personne }) => {
  const { userResponse, setUserResponse } = useContext(QueryContext);

  return (
    <>
      <TextField
        id="standard-basic"
        label={placeholder}
        onChange={(e) => {
          setUserResponse({ ...userResponse, [personne]: e.target.value });
        }}
      />
    </>
  );
};

export default Input;
