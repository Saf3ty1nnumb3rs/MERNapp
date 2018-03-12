import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ConsView from "./components/ConsView";
import UserView from "./components/UserView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/cons" component={ConsView} />
          <Route path="/user" component={UserView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
