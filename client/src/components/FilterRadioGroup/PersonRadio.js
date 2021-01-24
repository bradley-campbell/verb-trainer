import React, { useContext } from "react";
import { Form, Radio } from "semantic-ui-react";
import { QueryContext } from "../../context/QueryContext";

const MoodRadio = ({ data, label }) => {
  const {
    query,
    setQuery,
    options: { person },
  } = useContext(QueryContext);

  return (
    <Form>
      <Form.Field>{label}</Form.Field>

      {person.map((option) => {
        return (
          <Form.Field>
            <Radio
              label={option}
              name="radioGroup"
              value={option}
              checked={query.mood === option}
              onChange={() => {
                setQuery({ ...query, mood: option });
                console.log(query);
              }}
            />
          </Form.Field>
        );
      })}
    </Form>
  );
};

export default MoodRadio;
