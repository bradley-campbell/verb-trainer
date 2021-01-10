import React, { useState } from "react";
import verbList from "french-verbs-list";
import base64 from "base-64";
import QueryForm from "./QueryForm";
import styled from "styled-components";

function App() {
  const [data, setData] = useState({
    conjugated: "",
    results: "",
  });
  const [query, setQuery] = useState({
    verb: "",
    mood: "",
    temps: "",
    personne: "",
  });

  const handleFetch = async () => {
    const url = `/conjug?verb=${query.verb}&temps=${query.temps}&personne=${query.personne}&mood=${query.mood}`;
    const response = await fetch(url);
    const parsed = await response.json();

    const lexicalaHeaders = {
      headers: new Headers({
        Authorization: `Basic ${base64.encode(
          `${process.env.REACT_APP_LEXICALA_USERNAME}:${process.env.REACT_APP_LEXICALA_PASSWORD}`
        )}`,
      }),
    };

    const definition = await fetch(
      `https://dictapi.lexicala.com/search?text=${query.verb}&language=fr`,
      lexicalaHeaders
    );
    const definitionParsed = await definition.json();
    setData({ conjugated: parsed.data, results: definitionParsed.results[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch();
  };

  console.log(data);

  return (
    <Wrapper>
      <h1>French Club Verb Trainer</h1>
      <QueryForm
        handleSubmit={handleSubmit}
        data={data}
        query={query}
        setQuery={setQuery}
      />
      {data.conjugated && <h1>{data.conjugated}</h1>}
      {data.results &&
        data.results.senses.map((sense) => <h1>{sense.definition}</h1>)}
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
