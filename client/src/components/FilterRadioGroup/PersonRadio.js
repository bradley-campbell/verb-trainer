import React, { useContext } from "react";
import { Form, Radio, Segment } from "semantic-ui-react";
import { QueryContext } from "../../context/QueryContext";

const MoodRadio = ({ data, label }) => {
  const {
    query,
    setQuery,
    options: { person },
  } = useContext(QueryContext);

  return (
    <Form>
      <Form.Field>Person</Form.Field>
      {person.map((option) => {
        return (
          <Form.Field>
            <Radio
              label={option.label}
              name="radioGroup"
              value={option.value}
              checked={query.person === option.value}
              onChange={() => {
                setQuery({ ...query, person: option.value });
              }}
            />
          </Form.Field>
        );
      })}
    </Form>
  );
};

export default MoodRadio;
