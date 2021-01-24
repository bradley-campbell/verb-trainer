import React, { useEffect, useState, useContext } from "react";

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
    console.log(parsed);
    setData(parsed.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <FilterRadioGroup />
      <SearchBar handleFetch={handleFetch} />
      <div>{data}</div>
    </>
  );
};

export default HomePage;
