import React, { useState, useContext } from "react";

import FilterRadioGroup from "../../components/FilterRadioGroup";
import SearchBar from "../../components/SearchBar";
import { QueryContext } from "../../context/QueryContext";

const HomePage = () => {
  const [data, setData] = useState("");

  const {
    query: { verb, mood, person, tense },
  } = useContext(QueryContext);

  const handleFetch = async () => {
    const url = `/conjug?verb=${verb}&personne=${person}&temps=${tense}&mood=${mood}`;
    const response = await fetch(url);
    const parsed = await response.json();
    alert(parsed.data);
    setData(parsed.data);
  };

  return (
    <>
      <FilterRadioGroup />
      <SearchBar handleFetch={handleFetch} />
    </>
  );
};

export default HomePage;
