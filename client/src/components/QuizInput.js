import React, { useContext, useEffect } from "react";
import { Segment, Input, SegmentGroup, Button } from "semantic-ui-react";
import { firstGroup, secondGroup, thirdGroup } from "french-verbs-list";

import { QueryContext } from "../context/QueryContext";

const inputSegment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const QuizInput = () => {
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
    setQuery({ ...query, verb: firstGroup[100] });
  };

  const handleChange = (e, { value }) => {
    setQuery({ ...query, verb: value });
  };

  return (
    <Segment>
      <Input
        placeholder="Choose a verb..."
        onChange={handleChange}
        value={query.verb}
      />
      <Button onClick={selectRandomVerb}>Random Verb</Button>
      <SegmentGroup horizontal>
        <Segment style={inputSegment}>
          <Input
            placeholder="1s"
            onChange={(e) => {
              setUserResponse({ ...userResponse, s1: e.target.value });
              console.log(userResponse);
            }}
          />
          <Input
            placeholder="2s"
            onChange={(e) => {
              setUserResponse({ ...userResponse, s2: e.target.value });
            }}
          />
          <Input
            placeholder="3s"
            onChange={(e) => {
              setUserResponse({ ...userResponse, s3: e.target.value });
            }}
          />
        </Segment>
        <Segment style={inputSegment}>
          <Input
            placeholder="1p"
            onChange={(e) => {
              setUserResponse({ ...userResponse, p1: e.target.value });
            }}
          />
          <Input
            placeholder="2p"
            onChange={(e) => {
              setUserResponse({ ...userResponse, p2: e.target.value });
            }}
          />
          <Input
            placeholder="3p"
            onChange={(e) => {
              setUserResponse({ ...userResponse, p3: e.target.value });
            }}
          />
        </Segment>
      </SegmentGroup>
      <Button>Validate</Button>
    </Segment>
  );
};

export default QuizInput;
