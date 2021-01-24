import React, { useEffect, useContext } from "react";

import { Segment } from "semantic-ui-react";
import { QueryContext } from "../../context/QueryContext";
import MoodRadio from "./MoodRadio";

const segmentStyling = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "25px 10% 25px 10%",
};

const FilterRadioGroup = () => {
  const {
    options: { mood, tense, person },
    query,
    setQuery,
  } = useContext(QueryContext);

  useEffect(() => {
    setQuery({ ...query, tense: "Présent" });
  }, [query.mood]);

  return (
    <Segment style={segmentStyling}>
      <MoodRadio data={mood} label="mood" />
      <MoodRadio data={tense} label="tense" />
      <MoodRadio data={person} label="person" />
    </Segment>
  );
};

export default FilterRadioGroup;
