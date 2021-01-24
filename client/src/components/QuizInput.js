import React, { useContext } from "react";
import { Segment, Input, SegmentGroup, Button } from "semantic-ui-react";

import { QueryContext } from "../context/QueryContext";

const inputSegment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const QuizInput = () => {
  const { userResponse, setUserResponse } = useContext(QueryContext);

  return (
    <Segment>
      <Input placeholder="Choose a verb..." />
      <Button>Random Verb</Button>
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
