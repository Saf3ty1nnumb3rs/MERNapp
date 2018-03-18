import React, { Component } from "react";
import axios from "axios";
import ShoutListComponent from "./shoutcomponents/ShoutListComponent";
import UserListComponent from "./usercomponents/UserListComponent";
import ConComponent from "./ConComponent";
import CreateUserForm from "./usercomponents/CreateUserForm";
import CreateShoutForm from "./shoutcomponents/CreateShoutForm";
import Navbar from "../Navbar";
import { Grid, Button, Segment, Icon, Container } from "semantic-ui-react";
import styled from "styled-components";

const BodyWrapper = styled.div``;

const ConWrapper = styled.div`
  height: 72 vh;
  margin-left: 10px;
  margin-top: 110px;
`;

const ScrollWrapper = styled.div`
  height: 72vh;
  margin-right: 10px;
  margin-top: 110px;
  border-top: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
  overflow-y: auto;
`;
const FormWrap = styled.div`
  margin-top: 110px;
  height: 72vh;
  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
`;
const ButtonWrap = styled.div`
  text-align: center;
  margin-top: 10px;
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
      <div>
        <Navbar />
        <Grid centered padded verticalAlign="middle" stackable columns={3}>
          <Grid.Column computer={6} tablet={10} mobile={16}>
            <ConWrapper>
              <ConComponent con={this.state.con} />
            </ConWrapper>
          </Grid.Column>
          <br />
          {this.state.showAddUser ? (
            <Grid.Column computer={4} tablet={8} mobile={16}>
              <FormWrap>
                <Segment raised>
                  <CreateUserForm
                    getAllUsers={this.getAllUsers}
                    cons={this.props.cons}
                    toggleShowAddUser={this.toggleShowAddUser}
                    consId={this.state.con._id}
                  />
                </Segment>
              </FormWrap>

              <ButtonWrap>
                <Button
                  animated
                  color="orange"
                  onClick={this.toggleShowAddUser}
                >
                  <Button.Content visible>User List</Button.Content>
                  <Button.Content hidden>
                    <Icon name="add user" />
                  </Button.Content>
                </Button>
              </ButtonWrap>
            </Grid.Column>
          ) : (
            <Grid.Column computer={4} tablet={8} mobile={10}>
              <ScrollWrapper>
                <Segment>
                  <UserListComponent
                    getAllUsers={this.getAllUsers}
                    users={this.state.users}
                    cons={this.props.cons}
                    consId={this.state.con._id}
                  />
                </Segment>
              </ScrollWrapper>
              <ButtonWrap>
                <Button animated color="green" onClick={this.toggleShowAddUser}>
                  <Button.Content visible>Sign Up</Button.Content>
                  <Button.Content hidden>
                    <Icon name="add user" />
                  </Button.Content>
                </Button>
              </ButtonWrap>
            </Grid.Column>
          )}

          {this.state.showShout ? (
            <Grid.Column computer={6} tablet={8} mobile={16}>
              <Segment raised>
                <h1>Shout It Out!!!</h1>
                <CreateShoutForm
                  getAllShouts={this.getAllShouts}
                  cons={this.props.cons}
                  consId={this.state.con._id}
                  toggleShowShout={this.toggleShowShout}
                />
              </Segment>
              <Container>
                <Button animated onClick={this.toggleShowShout}>
                  <Button.Content visible>Shout!</Button.Content>
                  <Button.Content hidden>
                    <Icon name="comments" />
                  </Button.Content>
                </Button>
              </Container>
            </Grid.Column>
          ) : (
            <Grid.Column computer={6} tablet={8} mobile={16}>
              <ScrollWrapper>
                <ShoutListComponent
                  shouts={this.state.shouts}
                  cons={this.props.cons}
                  consId={this.state.con._id}
                  getAllShouts={this.getAllShouts}
                  handleShoutChange={this.handleShoutChange}
                />
              </ScrollWrapper>
              <ButtonWrap>
                <Button animated onClick={this.toggleShowShout}>
                  <Button.Content visible>Shout!</Button.Content>
                  <Button.Content hidden>
                    <Icon name="comments" />
                  </Button.Content>
                </Button>
              </ButtonWrap>
            </Grid.Column>
          )}
        </Grid>
      </div>
    );
  }
}

export default SingleConView;
