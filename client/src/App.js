import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios"


import LandingPage from "./components/LandingPage";
import SingleConView from "./components/concomponents/SingleConView"
import ConsView from "./components/ConsView";
import UserView from "./components/concomponents/usercomponents/UserView";

import "./App.css";

class App extends Component {
  state = {
    cons: [],
  }


  componentWillMount() {
    this.getAllCons();
  }




  getAllCons = async () => {
    const res = await axios.get('/cons')
    console.log(res.data)
    this.setState({cons: res.data})
}




  render() {
const SingleConWrapper = (props) => {
    return <SingleConView cons={this.state.cons} {...props} />
}
const UserWrapper = (props) => {
    return <UserView cons={this.state.cons} {...props} />
}

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
