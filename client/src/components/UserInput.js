import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Segment, Input, SegmentGroup, Button, Form } from "semantic-ui-react";
import frenchVerbsList, {
  firstGroup,
  secondGroup,
  thirdGroup,
} from "french-verbs-list";
import _ from "lodash";

import DataContext from "../context/DataContext";
import FilterRadioGroup from "../components/FilterRadioGroup";

const inputSegment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const UserInput = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const {
    data: { results },
  } = useContext(DataContext);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SegmentGroup horizontal>
        <Segment style={inputSegment} inverted>
          <Form.Input
            type="text"
            name="s1"
            placeholder="Je"
            ref={register({
              required: true,
              validate: (value) => value === results.s1,
            })}
          />
          <Form.Input
            type="text"
            name="s2"
            placeholder="Tu"
            ref={register({
              required: true,
              validate: (value) => value === results.s2,
            })}
          />
          <Form.Input
            type="text"
            name="s3"
            placeholder="Il/Elle/On"
            ref={register({
              required: true,
              validate: (value) => value === results.s3,
            })}
          />
        </Segment>
        <Segment style={inputSegment}>
          <Form.Input
            type="text"
            name="p1"
            placeholder="Nous"
            ref={register({
              required: true,
              validate: (value) => value === results.p1,
            })}
          />
          <Form.Input
            type="text"
            name="p2"
            placeholder="Vous"
            ref={register({
              required: true,
              validate: (value) => value === results.p2,
            })}
          />
          <Form.Input
            type="text"
            name="p3"
            placeholder="Ils/Elles"
            ref={register({
              required: true,
              validate: (value) => value === results.p3,
            })}
          />
        </Segment>
      </SegmentGroup>
      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  );
};

export default UserInput;
