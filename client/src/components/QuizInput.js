import React, { useContext, useEffect } from "react";
import { Segment, Input, SegmentGroup, Button } from "semantic-ui-react";
import frenchVerbsList, {
  firstGroup,
  secondGroup,
  thirdGroup,
} from "french-verbs-list";
import _ from "lodash";

import QueryContext from "../context/QueryContext";
import FilterRadioGroup from "../components/FilterRadioGroup";
import UserInput from "./UserInput";

const inputSegment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const QuizInput = ({ handleFetch }) => {
  const { userResponse, setUserResponse, query, setQuery } = useContext(
    QueryContext
  );

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

  const selectRandomVerb = () => {
    setQuery({
      ...query,
      verb: _.sample(_.sample(Object.values(frenchVerbsList))),
    });
  };

  const handleChange = (e, { value }) => {
    setQuery({ ...query, verb: value });
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
          value={query.verb}
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
