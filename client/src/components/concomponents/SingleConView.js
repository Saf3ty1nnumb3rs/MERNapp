import React, { Component } from "react";
import axios from "axios";
import ShoutListComponent from "./shoutcomponents/ShoutListComponent";
import UserListComponent from "./usercomponents/UserListComponent";
import ConComponent from "./ConComponent";

class SingleConView extends Component {
  state = {
    con: {},
    users: [],
    shouts: []
  };

  // WILL MOUNT --------------------->
  componentWillMount() {
    this.getAllUsers();
    this.getAllShouts();

    if (this.props.match.params) {
      const consId = this.props.match.params.id;
      axios.get(`/cons/${consId}`).then(res => {
        const con = {
          _id: res.data._id,
          name: res.data.name,
          theme: res.data.theme,
          location: res.data.location,
          date: res.data.date,
          img: res.data.img
        };
        this.setState({ con: con });
      });
    }
  }

  // FUNCTIONS ------------------------>

  getAllUsers = async () => {
    const consId = this.props.match.params.id;
    const res = await axios.get(`/cons/${consId}/users`);
    this.setState({ users: res.data });
  };

  getAllShouts = async () => {
    const consId = this.props.match.params.id;
    const res = await axios.get(`/cons/${consId}/shouts`);
    this.setState({ shouts: res.data });
  };

  render() {
    return (
      <div>
        <h1>Hi!</h1>

        <ConComponent con={this.state.con} />
        <UserListComponent users={this.state.users} />
        <ShoutListComponent shouts={this.state.shouts} />
      </div>
    );
  }
}

export default SingleConView;
