import React from "react";
import QuizInput from "../../components/QuizInput";
import { useSelector, useDispatch } from "react-redux";
import { setResults } from "../../redux/verbDataSlice";

import { Segment } from "semantic-ui-react";

const QuizSettings = () => {
  const dispatch = useDispatch();

  const {
    query: { verb, mood, tense },
  } = useSelector((state) => state.verbQuery);

  const handleFetch = async () => {
    const response = await fetch(
      `/table?verb=${verb}&mood=${mood}&tense=${tense}`
    );
    const verbTable = await response.json();
    dispatch(setResults(verbTable.data));
  };

  return <QuizInput handleFetch={handleFetch} />;
};

export default QuizSettings;
