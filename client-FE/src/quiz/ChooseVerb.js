import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../Context";
import styled from "styled-components";
import verbList from "french-verbs-list";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SubmitButton from "../SubmitButton";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import handleFetch from "./handleFetch";
import QueryForm from "../QueryForm";

import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ChooseVerb = () => {
  const classes = useStyles();

  const [value, setValue] = useState("firstGroup");

  const [randomVerb, setRandomVerb] = useState("");

  const { verbTable, setVerbTable, setQuery, query, options } = useContext(
    QueryContext
  );

  useEffect(() => {
    setQuery({ ...query, mood: _.sample(options.mood) });
  }, []);

  const handleChange = (event) => {
    setQuery({
      ...query,
      verb: _.sample(verbList[event.target.value], 5),
      tense: _.sample(options.tense),
      person: _.sample(options.person),
    });

    console.log(query);
  };

  const { userResponse } = useContext(QueryContext);

  console.log(userResponse, verbTable);

  return (
    <div>
      {!verbTable.data && (
        <QueryForm
          dataToUpdate={setVerbTable}
          handleFetch={handleFetch}
          personne={false}
        />
      )}

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleFetch(query, setVerbTable);
        }}
      >
        <div>
          <TextField
            id="filled-search"
            label="Choose a verb"
            helperText="Choose a verb"
            type="search"
            variant="filled"
            value={query.verb}
            onChange={(e) => {
              setQuery({ ...query, verb: e.target.value });
            }}
          />
        </div>

        <FormControl component="fieldset">
          <FormLabel component="legend">Group</FormLabel>
          <RadioGroup
            aria-label="Group"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="firstGroup"
              control={<Radio />}
              label="Verbes en -er"
            />
            <FormControlLabel
              value="secondGroup"
              control={<Radio />}
              label="Verbes en -ir"
            />
            <FormControlLabel
              value="thirdGroup"
              control={<Radio />}
              label="Verbes irreguliers"
            />
            <FormControlLabel
              value=""
              control={<Radio />}
              label="Fournissez une verbe"
            />
          </RadioGroup>
        </FormControl>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ChooseVerb;
