import React, { useContext } from "react";
import styled from "styled-components";
import { DisplayContext } from "../Context";

const Welcome = () => {
  const { display, setDisplay } = useContext(DisplayContext);

  // Make route for verb conjugator and for quiz

  return (
    <Wrapper visibility={display.welcome}>
      <button
        onClick={() => {
          setDisplay({ ...display, conjug: true, welcome: false });
        }}
      >
        Verb Conjugator
      </button>
      <button
        onClick={() => {
          setDisplay({ ...display, quiz: true, welcome: false });
        }}
      >
        Quiz
      </button>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25vw;
  height: 25vh;
  background-color: green;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};

  button {
    height: 25%;
    width: 25%;
  }
`;
