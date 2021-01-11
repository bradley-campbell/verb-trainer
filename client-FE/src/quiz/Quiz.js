import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../QueryContext";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Input from "./Input";
import SubmitButton from "../Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Quiz = () => {
  const [quizVerb, setQuizVerb] = useState("");

  const {
    data,
    setData,
    userResponse,
    query: { verb },
    verbTable,
    setVerbTable,
  } = useContext(QueryContext);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleFetch = async () => {
    const response = await fetch(`/table?verb=${quizVerb}`);
    const verbTable = await response.json();
    setVerbTable({ data: verbTable.data });
  };

  const handleChooseVerb = (e) => {
    e.preventDefault();
    handleFetch();
  };

  return (
    <Wrapper>
      {!verbTable.data && (
        <form onSubmit={handleChooseVerb}>
          <input
            onChange={(e) => {
              setQuizVerb(e.target.value);
            }}
            placeholder="Choose a verb"
          ></input>
          <button type="submit">Submit</button>
        </form>
      )}

      {verbTable.data && (
        <>
          <Form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h1>{quizVerb}</h1>
            <QuizFields>
              <QuizColumn>
                <Input placeholder="Je" personne="s1" />
                <Input placeholder="Tu" personne="s2" />
                <Input placeholder="Il/Elle/On" personne="s3" />
              </QuizColumn>
              <QuizColumn>
                <Input placeholder="Nous" personne="p1" />
                <Input placeholder="Vous" personne="p2" />
                <Input placeholder="Ils/Elles" personne="p3" />
              </QuizColumn>
            </QuizFields>
            <SubmitButton />
          </Form>
        </>
      )}
    </Wrapper>
  );
};

export default Quiz;

const Wrapper = styled.div`
  padding: 25px;
  background-color: rgba(224, 224, 224, 0.7);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const QuizColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 0 15px;
`;

const QuizFields = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
