import React, { useContext, FC } from "react";
import { Form, Radio } from "semantic-ui-react";
import { QueryContext } from "../../context/QueryContext";

type Props = {
  data: string;
  label: string;
};

const RadioGroupMood: FC<Props> = (props) => {
  const { query, setQuery } = useContext(QueryContext);
  const { data, label } = props;

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
