import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { injectGlobal } from "styled-components";

import LandingPage from "./components/LandingPage";
import SingleConView from "./components/concomponents/SingleConView";
import ConsView from "./components/ConsView";
import UserView from "./components/concomponents/usercomponents/UserView";

import "./App.css";

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Audiowide|Courgette');

  
  * {
	margin: 0;
	padding: 0;
  }
  *:before,
  *:after {
	  box-sizing: border-box;
  }
  body {
    margin: 0;  
  }
`;

class App extends Component {
  state = {
    cons: []
  };

  componentWillMount() {
    this.getAllCons();
  }

  getAllCons = async () => {
    const res = await axios.get("/api/cons");
    console.log(res.data);
    this.setState({ cons: res.data });
  };

  render() {
    const SingleConWrapper = props => {
      return <SingleConView cons={this.state.cons} {...props} />;
    };
    const UserWrapper = props => {
      return <UserView cons={this.state.cons} {...props} />;
    };

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cons" component={ConsView} />
          <Route exact path="/cons/:id" render={SingleConWrapper} />
          <Route exact path="/cons/:consId/users/:id" render={UserWrapper} />
        </Switch>
      </Router>
    );
  }
}

export default App;
