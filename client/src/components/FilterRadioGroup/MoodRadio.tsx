import React, { FC, useContext } from "react";
import { Form, Radio, Segment } from "semantic-ui-react";
import QueryContext from "../../context/QueryContext";

type Props = {
  data: string[];
  label: string;
};

const MoodRadio: FC<Props> = (props) => {
  const { query, setQuery } = useContext(QueryContext);
  const { data, label } = props;
  return (
    <Form>
      <Form.Field>{label}</Form.Field>
      <Segment>
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
                }}
              />
            </Form.Field>
          );
        })}
      </Segment>
    </Form>
  );
};

export default MoodRadio;
