import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import SingleConView from "./components/concomponents/SingleConView"
import ConsView from "./components/ConsView";
import UserView from "./components/concomponents/usercomponents/UserView";

import "./App.css";

class App extends Component {
  render() {



    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cons" component={ConsView} />
          <Route exact path="/cons/:id" component={SingleConView} />
          <Route exact path="/cons/:consId/user/:id" component={UserView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
