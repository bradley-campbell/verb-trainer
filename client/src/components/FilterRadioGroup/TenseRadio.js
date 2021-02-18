import React, { useContext } from "react";
import { Form, Radio, Segment } from "semantic-ui-react";
import QueryContext from "../../context/QueryContext";

import { useSelector, useDispatch } from "react-redux";
import { setTense } from "../../redux/verbQuerySlice";

const TenseRadio = ({ data, label }) => {
  const { query, setQuery } = useContext(QueryContext);

  const dispatch = useDispatch();

  return (
    <Form>
      <Form.Field>{label}</Form.Field>

      <Segment>
        {data.map((tense) => {
          return (
            <Form.Field>
              <Radio
                label={tense}
                name="radioGroup"
                value={tense}
                checked={query[label] === tense}
                onChange={() => {
                  setQuery({ ...query, [label]: tense });
                  dispatch(setTense(tense));
                }}
              />
            </Form.Field>
          );
        })}
      </Segment>
    </Form>
  );
};

export default TenseRadio;
