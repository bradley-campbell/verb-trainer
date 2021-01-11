import React, { useState, createContext, useContext } from "react";
import verbList from "french-verbs-list";
import QueryForm from "./QueryForm";
import styled from "styled-components";
import { QueryContext } from "./QueryContext";
import GlobalStyles from "./GlobalStyles";
import "normalize.css";
import Quiz from "./quiz/Quiz";
import handleFetch from "./handleFetch";

function App() {
  const { data } = useContext(QueryContext);

  return (
    <Wrapper>
      <GlobalStyles />
      <h1>FRENCH CLUB</h1>
      {/* <QueryForm /> */}
      <Quiz />
      {/* {data.conjugated && <h1>{data.conjugated}</h1>}
      {data.results &&
        data.results.senses.map((sense) => <h1>{sense.definition}</h1>)} */}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
