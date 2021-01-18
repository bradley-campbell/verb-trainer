import React, { useContext } from "react";
import handleFetch from "../handleFetch";
import QueryForm from "../QueryForm";
import { QueryContext, DisplayContext } from "../Context";
import styled from "styled-components";

const Conjugator = () => {
  const { data, setData } = useContext(QueryContext);
  const { display, setDisplay } = useContext(DisplayContext);

  return (
    <Wrapper visibility={display.conjug}>
      <QueryForm
        handleFetch={handleFetch}
        dataToUpdate={setData}
        personne={true}
      />

      {data.conjugated && <h1>{data.conjugated}</h1>}
      {data.results &&
        data.results.senses.map((sense) => <h1>{sense.definition}</h1>)}
    </Wrapper>
  );
};

export default Conjugator;

const Wrapper = styled.div`
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;
