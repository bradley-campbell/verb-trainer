import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { Segment, SegmentGroup, Form } from "semantic-ui-react";

import DataContext from "../context/DataContext";

const inputSegment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const UserInput = () => {
  const {
    data: { results },
  } = useContext(DataContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (JSON.stringify(data) === JSON.stringify(results)) {
      console.log("Good job!");
    } else {
      console.log("Try Again!");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{ visibility: results ? "visible" : "hidden" }}
    >
      <SegmentGroup horizontal>
        <Segment style={inputSegment} inverted>
          <input
            type="text"
            name="s1"
            placeholder="Je"
            ref={register({
              required: true,
              validate: (value) => value === results.s1,
            })}
          />
          {errors.s1 && "Nope"}
          <input
            type="text"
            name="s2"
            placeholder="Tu"
            ref={register({
              required: true,
              validate: (value) => value === results.s2,
            })}
          />
          <input
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
          <input
            type="text"
            name="p1"
            placeholder="Nous"
            ref={register({
              required: true,
              validate: (value) => value === results.p1,
            })}
          />
          <input
            type="text"
            name="p2"
            placeholder="Vous"
            ref={register({
              required: true,
              validate: (value) => value === results.p2,
            })}
          />
          <input
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
