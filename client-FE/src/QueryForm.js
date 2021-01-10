import React from "react";
import OptionSelect from "./Select";
import styled from "styled-components";

const tenses = ["Présent", "Imparfait", "Passé Simple", "Futur"];

const mood = ["Indicatif", "Conditionnel", "Subjonctif", "Imperatif"];

const person = ["1s", "2s", "3s", "1p", "2p", "3p"];

const QueryForm = ({ data, query, setQuery, handleSubmit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="enter a verb"
          value={query.verb}
          onChange={(e) => {
            setQuery({ ...query, verb: e.target.value });
            console.log(query);
          }}
          required
        ></input>

        <OptionSelect
          query={query}
          setQuery={setQuery}
          choices={tenses}
          label="Tense"
          queryKey="temps"
        />
        <OptionSelect
          query={query}
          setQuery={setQuery}
          choices={mood}
          label="Mood"
          queryKey="mood"
        />
        <OptionSelect
          query={query}
          setQuery={setQuery}
          choices={person}
          label="Person"
          queryKey="personne"
        />
        <button type="submit">SUBMIT</button>
      </Form>
    </>
  );
};

export default QueryForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black 2px solid;
  padding: 15px;
`;
