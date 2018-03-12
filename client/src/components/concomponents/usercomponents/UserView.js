import React, { Component } from "react";
import UserComponent from "./UserComponent";

class UserView extends Component {
  render() {
    return (
      <div>
        <h1>Solo Users live here!!!!!</h1>
        <UserComponent />
      </div>
    );
  }
}

export default UserView;
