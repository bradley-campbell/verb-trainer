import React, { useContext, useState } from "react";
import { QueryContext, DisplayContext } from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Input from "./Input";
import SubmitButton from "../SubmitButton";
import ChooseVerb from "./ChooseVerb";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Quiz = () => {
  const {
    userResponse,
    query: { verb, temps, mood },
    verbTable,
    setVerbTable,
  } = useContext(QueryContext);

  const { display, setDisplay } = useContext(DisplayContext);

  const classes = useStyles();

  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      JSON.stringify(verbTable.data[mood][temps]) === // Compare user response with fetched verb table
      JSON.stringify(userResponse)
    ) {
      console.log("good job!"); // TODO - If there's a match, the user should see a message
      setResult("Good job!");
    } else {
      setResult("Try again"); // TODO - If there's no match, the user should see a message - maybe event a count of how many fields match
    }
  };

  return (
    <Wrapper visibility={display.quiz}>
      <h1>QUIZ</h1>
      <ChooseVerb />

      {verbTable.data && (
        <>
          <Form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h1>
              {mood} - {temps}
            </h1>
            <h1>{verb}</h1>
            <QuizFields>
              <QuizColumn>
                <Input placeholder="Je" personne="s1" />
                <Input placeholder="Tu" personne="s2" />
                <Input placeholder="Il/Elle/On" personne="s3" />
              </QuizColumn>
              <QuizColumn>
                <Input placeholder="Nous" personne="p1" />
                <Input placeholder="Vous" personne="p2" />
                <Input placeholder="Ils/Elles" personne="p3" />
              </QuizColumn>
            </QuizFields>

            {result && <h1>{result}</h1>}

            <ButtonDiv>
              <SubmitButton />
            </ButtonDiv>
          </Form>
        </>
      )}
    </Wrapper>
  );
};

export default Quiz;

const Wrapper = styled.div`
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  padding: 25px;
  background-color: rgba(224, 224, 224, 0.7);
  border-radius: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

const QuizColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 0 15px;
`;

const QuizFields = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
