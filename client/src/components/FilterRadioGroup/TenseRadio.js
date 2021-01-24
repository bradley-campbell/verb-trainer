import React, { useContext } from "react";
import { Form, Radio } from "semantic-ui-react";
import { QueryContext } from "../../context/QueryContext";

const RadioGroupMood = ({ data, label }) => {
  const { query, setQuery } = useContext(QueryContext);

  return (
    <Form>
      <Form.Field>{label}</Form.Field>

      {data.map((mood) => {
        return (
          <Form.Field>
            <Radio
              label={mood}
              name="radioGroup"
              value={mood}
              checked={query[label] === mood}
              onChange={() => {
                setQuery({ ...query, [label]: mood });
                console.log(query);
              }}
            />
          </Form.Field>
        );
      })}
    </Form>
  );
};

export default RadioGroupMood;
