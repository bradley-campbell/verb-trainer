import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import QuizSettings from "../QuizSettings";
import QuizInput from "../QuizInput";
import Header from "../../components/Header";
import { Container } from "semantic-ui-react";

const wrapperStyles = {
  background: "linear-gradient(rgba(0,0,0,1) 10%, rgba(216,216,216,1) 100%)",
  minHeight: "100vh",
};

const App = () => {
  return (
    <div style={wrapperStyles}>
      <Container fluid>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/quiz/" component={QuizSettings} />
            <Route
              exact
              path="/quiz/:verb/:mood/:tense"
              component={QuizInput}
            />
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;
