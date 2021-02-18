import React, { useContext } from "react";
import { Form, Radio, Segment, SegmentGroup } from "semantic-ui-react";
import QueryContext from "../../context/QueryContext";

import { useDispatch, useSelector } from "react-redux";

import { setPerson } from "../../redux/verbQuerySlice";

const MoodRadio = ({ data, label }) => {
  const {
    query,
    setQuery,
    options: { person },
  } = useContext(QueryContext);

  const yooo = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  return (
    <Form>
      <Form.Field>Person</Form.Field>
      <SegmentGroup horizontal>
        <Segment>
          <Form.Field>
            <Radio
              label={person[0].label}
              name="radioGroup"
              value={person[0].value}
              checked={query.person === person[0].value}
              onChange={() => {
                setQuery({ ...query, person: person[0].value });
                dispatch(setPerson(person[0].value));
                console.log(yooo);
              }}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label={person[1].label}
              name="radioGroup"
              value={person[1].value}
              checked={query.person === person[1].value}
              onChange={() => {
                setQuery({ ...query, person: person[1].value });
                dispatch(setPerson(person[1].value));
              }}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label={person[2].label}
              name="radioGroup"
              value={person[2].value}
              checked={query.person === person[2].value}
              onChange={() => {
                setQuery({ ...query, person: person[2].value });
                dispatch(setPerson(person[2].value));
              }}
            />
          </Form.Field>
        </Segment>

        {person.length > 3 && (
          <Segment>
            <Form.Field>
              <Radio
                label={person[3].label}
                name="radioGroup"
                value={person[3].value}
                checked={query.person === person[3].value}
                onChange={() => {
                  setQuery({ ...query, person: person[3].value });
                  dispatch(setPerson(person[3].value));
                }}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label={person[4].label}
                name="radioGroup"
                value={person[4].value}
                checked={query.person === person[4].value}
                onChange={() => {
                  setQuery({ ...query, person: person[4].value });
                  dispatch(setPerson(person[4].value));
                }}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label={person[5].label}
                name="radioGroup"
                value={person[5].value}
                checked={query.person === person[5].value}
                onChange={() => {
                  setQuery({ ...query, person: person[5].value });
                  dispatch(setPerson(person[5].value));
                }}
              />
            </Form.Field>
          </Segment>
        )}
      </SegmentGroup>
    </Form>
  );
};

export default MoodRadio;

// {person.map((option) => {
//   return (
//     <Form.Field>
//       <Radio
//         label={option.label}
//         name="radioGroup"
//         value={option.value}
//         checked={query.person === option.value}
//         onChange={() => {
//           setQuery({ ...query, person: option.value });
//         }}
//       />
//     </Form.Field>
//   );
// })}

{
  /* <Segment>
  <Form.Field>
    <Radio
      label={option[0].label}
      name="radioGroup"
      value={option[0].value}
      checked={query.person === option[0].value}
      onChange={() => {
        setQuery({ ...query, person: option[0].value });
      }}
    />
  </Form.Field>
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
</Segment>; */
}
