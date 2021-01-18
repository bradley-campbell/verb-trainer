import React, { useContext } from "react";
import styled from "styled-components";
import { QueryContext } from "./Context";
import GlobalStyles from "./GlobalStyles";
import "normalize.css";
import Quiz from "./quiz/Quiz";
import Welcome from "./Welcome/Welcome";
import Conjugator from "./Conjug/Conjugator";

function App() {

  const { data, setData } = useContext(QueryContext);

  return (
    <Wrapper>
      <GlobalStyles />
      <h1>FRENCH CLUB</h1>
      <Welcome />
      <Conjugator />
      <Quiz />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// {
//   /* <h1>French Club</h1>;
// {
//   welcome && <Welcome />;
// }
// {
//   conjug && <Conjug />;
// }
// {
//   quiz && <Quiz />;
// } */
// }
