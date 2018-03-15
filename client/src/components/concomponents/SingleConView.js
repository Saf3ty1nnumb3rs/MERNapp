import React, { Component } from "react";
import axios from "axios";
import ShoutListComponent from "./shoutcomponents/ShoutListComponent";
import UserListComponent from "./usercomponents/UserListComponent";
import ConComponent from "./ConComponent";
import CreateUserForm from "./usercomponents/CreateUserForm";
import CreateShoutForm from "./shoutcomponents/CreateShoutForm";
import Navbar from "../Navbar";
import { Grid, Button } from "semantic-ui-react";

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
      axios.get(`/api/cons/${consId}`).then(res => {
        this.setState({ con: res.data });
      });
    }
  }

  // FUNCTIONS ------------------------>

  getAllUsers = async () => {
    const consId = this.props.match.params.id;
    const res = await axios.get(`/api/cons/${consId}/users`);
    this.setState({ users: res.data });
  };

  getAllShouts = async () => {
    const consId = this.props.match.params.id;
    const res = await axios.get(`/api/cons/${consId}/shouts`);
    this.setState({ shouts: res.data });
  };

  toggleShowAddUser = () => {
    this.setState({ showAddUser: !this.state.showAddUser });
  };

  handleShoutChange = (event, id) => {
    console.log(id);
    const newShouts = [...this.state.shouts];
    console.log(newShouts);
    const shoutToChange = newShouts.find(shout => shout._id === id);
    console.log(shoutToChange);
    shoutToChange[event.target.name] = event.target.value;

    this.setState({ shouts: newShouts });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Hi!</h1>

        <ConComponent con={this.state.con} />
        <Grid>
          {this.state.showAddUser ? (
            <Grid.Column width={6}>
              <CreateUserForm
                getAllUsers={this.getAllUsers}
                cons={this.props.cons}
                toggleShowAddUser={this.toggleShowAddUser}
                consId={this.state.con._id}
              />
              <Button onClick={this.toggleShowAddUser}>Create New User</Button>
            </Grid.Column>
          ) : (
            <Grid.Column width={6}>
              <UserListComponent
                getAllUsers={this.getAllUsers}
                users={this.state.users}
                cons={this.props.cons}
                consId={this.state.con._id}
              />
              <Button onClick={this.toggleShowAddUser}>Create New User</Button>
            </Grid.Column>
          )}

          <Grid.Column width={6}>
            <ShoutListComponent
              shouts={this.state.shouts}
              cons={this.props.cons}
              consId={this.state.con._id}
              getAllShouts={this.getAllShouts}
              handleShoutChange={this.handleShoutChange}
            />
            <CreateShoutForm
              getAllShouts={this.getAllShouts}
              cons={this.props.cons}
              consId={this.state.con._id}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SingleConView;
