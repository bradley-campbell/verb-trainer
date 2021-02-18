import React from "react";

import FilterRadioGroup from "../../components/FilterRadioGroup";
import SearchBar from "../../components/SearchBar";

import { useSelector } from "react-redux";

const HomePage = () => {
  const {
    query: { verb, mood, person, tense },
  } = useSelector((state) => state.reducer);

  const handleFetch = async () => {
    console.log(
      `/conjug?verb=${verb}&personne=${person}&temps=${tense}&mood=${mood}`
    );
    const url = `/conjug?verb=${verb}&personne=${person}&temps=${tense}&mood=${mood}`;
    const response = await fetch(url);
    const parsed = await response.json();
    alert(parsed.data);
  };

  return (
    <>
      <FilterRadioGroup includePerson={true} />
      <SearchBar handleFetch={handleFetch} />
    </>
  );
};

export default HomePage;
