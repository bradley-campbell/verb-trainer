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

import FilterRadioGroup from "../components/FilterRadioGroup";
import UserInput from "./UserInput";

const inputSegment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const QuizInput = ({ handleFetch }) => {

  const dispatch = useDispatch();

  const {
    query: { verb },
  } = useSelector((state) => state.verbQuery);

  const selectRandomVerb = () => {
    dispatch(setVerb(_.sample(_.sample(Object.values(frenchVerbsList)))));
  };

  const handleChange = (e, { value }) => {
    dispatch(setVerb(value));
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
      <Button onClick={handleFetch}>Start</Button>
      <UserInput />
      {/* <Button>Validate</Button> */}
    </Segment>
  );
};

export default QuizInput;

// const { data, setData } = useContext(DataContext);
  // const {
  //   query: { verb, mood, tense },
  // } = useContext(QueryContext);

  // const dispatch = useDispatch();

  // const { verbTable } = useSelector((state) => state.verbData);
  // const queryData = useSelector((state) => state.verbQuery);

  // console.log(verbTable);

  // const fetchDefinition = async () => {
  //   const url =
  //     "https://od-api.oxforddictionaries.com/api/v2/entries/fr/picoler";

  //   const reqObj = {
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       app_key: process.env.REACT_APP_OXFORD_KEY,
  //       app_id: process.env.REACT_APP_OXFORD_KEY,
  //     },
  //   };

  //   const data = await fetch(url, reqObj);
  //   const parsed = await data.json();
  //   console.log(parsed);
  // };
