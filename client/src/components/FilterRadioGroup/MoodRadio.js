import React, { useContext } from "react";
import { Form, Radio, Segment } from "semantic-ui-react";
import QueryContext from "../../context/QueryContext";
import { useDispatch, useSelector } from "react-redux";

import verbQuery, {
  setVerb,
  setMood,
  setOptions,
} from "../../redux/verbQuerySlice";

const MoodRadio = ({ data, label }) => {
  const { query, setQuery } = useContext(QueryContext);

  const {
    query: { verb, mood, tense, person },
    options,
  } = useSelector((state) => state.verbQuery);

  const dispatch = useDispatch();

  return (
    <Form>
      <Form.Field>{label}</Form.Field>
      <Segment>
        {options.mood.map((mood) => {
          return (
            <Form.Field>
              <Radio
                label={mood}
                name="radioGroup"
                value={mood}
                checked={query[label] === mood}
                onChange={() => {
                  setQuery({ ...query, [label]: mood });
                  dispatch(setMood(mood));
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
