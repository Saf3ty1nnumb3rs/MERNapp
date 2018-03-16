import React, { Component } from "react";
import axios from "axios";
import ShoutListComponent from "./shoutcomponents/ShoutListComponent";
import UserListComponent from "./usercomponents/UserListComponent";
import ConComponent from "./ConComponent";
import CreateUserForm from "./usercomponents/CreateUserForm";
import CreateShoutForm from "./shoutcomponents/CreateShoutForm";
import Navbar from "../Navbar";
import { Grid, Button, Segment, Icon } from "semantic-ui-react";
import styled from "styled-components";

const BodyWrapper = styled.div``;

const ConWrapper = styled.div`
  height: 40vw;
  margin-left: 10px;
  margin-top: 140px;
  position: relative;
`;

const ScrollWrapper = styled.div`
  height: 72vh;
  overflow-y: auto;
  margin-top: 120px;
`;
const ScrollShout = styled.div`
  height: 72vh;
  overflow-y: auto;
`;

const ShoutWrapper = styled.div`
  height: 72vh;
  margin-right: 10px;
  margin-top: 120px;
`;

class SingleConView extends Component {
  state = {
    con: {},
    users: [],
    shouts: [],
    showAddUser: false,
    showShout: false
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

  toggleShowShout = () => {
    this.setState({ showShout: !this.state.showShout });
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
      <BodyWrapper>
        <Navbar />
        <Grid centered stacking="true" verticalAlign="middle" columns={3}>
          <Grid.Column centered computer={5} tablet={12} mobile={16}>
            <ConWrapper>
              <Segment>
                <ConComponent con={this.state.con} />
              </Segment>
            </ConWrapper>

            <Button animated onClick={this.toggleShowAddUser}>
              <Button.Content visible>Sign Up</Button.Content>
              <Button.Content hidden>
                <Icon name="add user" />
              </Button.Content>
            </Button>
          </Grid.Column>
          {this.state.showAddUser ? (
            <Grid.Column centered computer={5} tablet={12} mobile={16}>
              <Segment raised>
                <CreateUserForm
                  getAllUsers={this.getAllUsers}
                  cons={this.props.cons}
                  toggleShowAddUser={this.toggleShowAddUser}
                  consId={this.state.con._id}
                />
              </Segment>
              <Button animated onClick={this.toggleShowAddUser}>
                <Button.Content visible>User List</Button.Content>
                <Button.Content hidden>
                  <Icon name="add user" />
                </Button.Content>
              </Button>
            </Grid.Column>
          ) : (
            <Grid.Column centered computer={5} tablet={12} mobile={16}>
              <ScrollWrapper>
                <UserListComponent
                  getAllUsers={this.getAllUsers}
                  users={this.state.users}
                  cons={this.props.cons}
                  consId={this.state.con._id}
                />
              </ScrollWrapper>
            </Grid.Column>
          )}

          {this.state.showShout ? (
            <Grid.Column centered computer={6} tablet={12} mobile={16}>
              <Segment raised>
                <h1>Shout It Out!!!</h1>
                <CreateShoutForm
                  getAllShouts={this.getAllShouts}
                  cons={this.props.cons}
                  consId={this.state.con._id}
                  toggleShowShout={this.toggleShowShout}
                />
              </Segment>
              <Button animated onClick={this.toggleShowShout}>
                <Button.Content visible>Shout!</Button.Content>
                <Button.Content hidden>
                  <Icon name="comments" />
                </Button.Content>
              </Button>
            </Grid.Column>
          ) : (
            <Grid.Column computer={6} tablet={12} mobile={16}>
              <Segment>
                <ShoutWrapper>
                  <ScrollShout>
                    <ShoutListComponent
                      shouts={this.state.shouts}
                      cons={this.props.cons}
                      consId={this.state.con._id}
                      getAllShouts={this.getAllShouts}
                      handleShoutChange={this.handleShoutChange}
                    />
                  </ScrollShout>
                </ShoutWrapper>
              </Segment>
              <Button animated onClick={this.toggleShowShout}>
                <Button.Content visible>Shout!</Button.Content>
                <Button.Content hidden>
                  <Icon name="comments" />
                </Button.Content>
              </Button>
            </Grid.Column>
          )}
        </Grid>
      </BodyWrapper>
    );
  }
}

export default SingleConView;
