import React, { useState } from "react";
import verbList from "french-verbs-list";
import base64 from "base-64";

function App() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState({
    verb: "",
    mood: "",
    temps: "",
    personne: "",
  });

  const tenses = ["Présent", "Imparfait", "Passé Simple", "Futur"];

  const mood = ["Indicatif", "Conditionnel", "Subjonctif", "Imperatif"];

  const person = ["1s", "2s", "3s", "1p", "2p", "3p"];

  const handleFetch = async () => {
    const url = `/conjug?verb=${query.verb}&temps=${query.temps}&personne=${query.personne}&mood=${query.mood}`;
    const response = await fetch(url);
    const parsed = await response.json();
    setData(parsed.data);

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

    console.log(definitionParsed.results[0].senses[0].definition);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch();
  };

  console.log(verbList.firstGroup[187]);

  // query.mood === "Imperatif" && // If mood is imperatif, only provide 2s, 1p and 2p as options to select
  //   person.filter(
  //     (person) => (person === "2s") | (person === "2p") | (person === "1p")
  //   );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter a verb"
          value={query.verb}
          onChange={(e) => {
            setQuery({ ...query, verb: e.target.value });
          }}
          required
        ></input>
        <select
          onChange={(e) => {
            setQuery({ ...query, temps: e.target.value });
          }}
          required
        >
          <option></option>
          {tenses.map((tense) => (
            <option value={tense}>{tense}</option>
          ))}
        </select>

        <select
          onChange={(e) => {
            setQuery({ ...query, mood: e.target.value });
          }}
          required
        >
          <option></option>
          {mood.map((mood) => (
            <option value={mood}>{mood}</option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setQuery({ ...query, personne: e.target.value });
          }}
          required
        >
          <option></option>
          {person.map((personne) => (
            <option value={personne}>{personne}</option>
          ))}
        </select>
        <button type="submit">SUBMIT</button>
      </form>
      {data && <h1>{data}</h1>}
    </>
  );
}

export default App;
