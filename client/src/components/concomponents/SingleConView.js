import React, { Component } from "react";
import axios from "axios";
import ShoutListComponent from "./shoutcomponents/ShoutListComponent";
import UserListComponent from "./usercomponents/UserListComponent";
import ConComponent from "./ConComponent";
import CreateUserForm from "./usercomponents/CreateUserForm";
import CreateShoutForm from "./shoutcomponents/CreateShoutForm";

class SingleConView extends Component {
  state = {
    con: {},
    users: [],
    shouts: [],
    showAddUser: false
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

  toggleShowAddUser = () => {
    this.setState({ showAddUser: !this.state.showAddUser });
  };

  

  render() {
    return (
      <div>
        <h1>Hi!</h1>

        <ConComponent con={this.state.con} />

        {this.state.showAddUser ? (
          <CreateUserForm
            getAllUsers={this.getAllUsers}
            consId={this.props.match.params.id}
          />
        ) : (
          <UserListComponent
            getAllUsers={this.getAllUsers}
            users={this.state.users}
            consId={this.props.match.params.id}
          />
        )}
        <button onClick={this.toggleShowAddUser}>Create New User</button>

        <ShoutListComponent shouts={this.state.shouts} />
        <CreateShoutForm
          getAllShouts={this.getAllShouts}
          consId={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default SingleConView;
