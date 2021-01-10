import React, { useContext } from "react";
import OptionSelect from "./Select";
import styled from "styled-components";
import { QueryContext } from "./QueryContext";
import handleFetch from "./handleFetch";

const QueryForm = () => {
  const { query, setData, setQuery, options } = useContext(QueryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch(query, setData);
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

        <OptionSelect choices={options.tense} label="Tense" queryKey="temps" />
        <OptionSelect choices={options.mood} label="Mood" queryKey="mood" />
        <OptionSelect
          choices={options.person}
          label="Person"
          queryKey="personne"
        />
        <Button type="submit">SUBMIT</Button>
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