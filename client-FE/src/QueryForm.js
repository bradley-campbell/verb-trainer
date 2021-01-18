import React, { useContext } from "react";
import OptionSelect from "./Select";
import styled from "styled-components";
import { QueryContext } from "./Context";
import SubmitButton from "./SubmitButton";

const QueryForm = ({ handleFetch, dataToUpdate, personne }) => {
  const { query, setQuery, options } = useContext(QueryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch(query, dataToUpdate);
  };

  return (
    <Wrapper>
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

        <OptionSelect choices={options.mood} label="Mode" queryKey="mood" />
        <OptionSelect choices={options.tense} label="Temps" queryKey="temps" />
        {personne && (
          <OptionSelect
            choices={options.person}
            label="Personne"
            queryKey="personne"
          />
        )}
        <SubmitButton />
      </Form>
    </Wrapper>
  );
};

export default QueryForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const Button = styled.button`
  margin-top: 15px;
  color: rgba(224, 224, 224, 1);
  background-color: black;
  padding: 10px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  padding: 25px;
  background-color: rgba(224, 224, 224, 0.7);
  border-radius: 15px;
`;
