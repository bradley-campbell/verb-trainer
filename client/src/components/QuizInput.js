import React, { useContext, useEffect } from "react";
import { Segment, Input, SegmentGroup, Button } from "semantic-ui-react";
import frenchVerbsList, {
  firstGroup,
  secondGroup,
  thirdGroup,
} from "french-verbs-list";
import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";

import { setVerb } from "../redux/verbQuerySlice";

import FilterRadioGroup from "./FilterRadioGroup";
import UserInput from "./UserInput";
import { useHistory } from "react-router-dom";

const inputSegment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const QuizInput = ({ handleFetch }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {
    query: { verb, mood, tense },
  } = useSelector((state) => state.verbQuery);

  const selectRandomVerb = () => {
    dispatch(setVerb(_.sample(_.sample(Object.values(frenchVerbsList)))));
  };

  const handleChange = (e, { value }) => {
    dispatch(setVerb(value));
  };

  const openQuiz = () => {
    if (verb && mood && tense) {
      history.push(`${verb}/${mood}/${tense}`);
    }
  };

  return (
    <Segment
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px 250px 15px 250px",
      }}
    >
      <div>
        <Input
          placeholder="Choose a verb..."
          onChange={handleChange}
          value={verb}
        />
        <Button onClick={selectRandomVerb}>Random Verb</Button>
      </div>
      <FilterRadioGroup includePerson={false} />
      <Button onClick={openQuiz}>Start</Button>
    </Segment>
  );
};

export default QuizInput;
