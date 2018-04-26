import React, { Component } from "react";
import axios from "axios";
import EditUserForm from "./EditUserForm";
import DeleteView from "./DeleteView";
import Navbar from "../../Navbar";
import SingleUserComponent from "./SingleUserComponent";
import { withRouter } from "react-router-dom";
import { Button, Segment, Icon, Grid } from "semantic-ui-react";
import styled from "styled-components";

const ButtonWrap = styled.div`
  margin: 22px;
  width: 100%;
`;

const UserWrap = styled.div`
  height: 72vh;
  width: 55vw;
  min-width: 280px;
  margin-top: 135px;
`;

const EditWrap = styled.div`
  height: 72vh;
  margin-top: 130px;
`;
const DeleteWrap = styled.div`
  height: 72vh;
  margin-top: 130px;
`;

class UserView extends Component {
  state = {
    user: {},
    users: [],
    showEditUser: false,
    showDeleteView: false,
    userView: true
  };

  componentWillMount() {
    if (this.props.match.params) {
      const userId = this.props.match.params.id;
      axios
        .get(`/api/cons/${this.props.match.params.consId}/users/${userId}`)
        .then(res => {
          this.setState({ user: res.data });
        });
    }
  }

  handleClick = () => {
    this.props.history.goBack(`cons/${this.props.match.params.consId}`);
  };

  removeUser = async user => {
    await axios.delete(
      `/api/cons/${this.props.match.params.consId}/users/${
        this.props.match.params.id
      }`
    );
    await this.getAllUsers();
  };

  getAllUsers = async () => {
    const consId = this.props.match.params.id;
    const res = await axios.get(`/api/cons/${consId}/users`);
    this.setState({ users: res.data });
  };


  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state.user };
    newState[name] = event.target.value;
    this.setState({ user: newState });
  };

  
  handleSubmit = async event => {
    event.preventDefault();
    const consId = this.props.match.params.consId;
    const userState = this.state.user;
    await axios.patch(
      `/api/cons/${consId}/users/${this.props.match.params.id}`,
      userState
    );
    await this.toggleShowEditUser();
    console.log("We all in here");
    await (res => {
      this.getAllUsers();
    });
  };

  toggleUser = () => {
    this.setState({
      showEditUser: false,
      showDeleteView: false,
      userView: true
    });
  };

  toggleShowEditUser = async () => {
    await this.setState({
      showEditUser: !this.state.showEditUser
    });

    this.state.showEditUser
      ? await this.setState({
          showDeleteView: false,
          userView: false
        })
      : await this.setState({
          showDeleteView: false,
          userView: true
        });
  };

  toggleDeleteUser = async () => {
    await this.setState({
      showDeleteView: !this.state.showDeleteView
    });

    this.state.showDeleteView
      ? await this.setState({
          showEditUser: false,
          userView: false
        })
      : await this.setState({
          showEditUser: false,
          userView: true
        });
  };

  render() {
    return (
      <Grid centered>
        <Navbar />
        {this.state.showEditUser ? (
          <EditWrap>
            <Segment>
              <EditUserForm
                user={this.state.user}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                showEditUser={this.toggleShowEditUser}
              />
            </Segment>
          </EditWrap>
        ) : null}

        {this.state.userView ? (
          <UserWrap>
            <Segment inverted>
              <SingleUserComponent user={this.state.user} />
            </Segment>
          </UserWrap>
        ) : null}

        {this.state.showDeleteView ? (
          <DeleteWrap>
            <Segment inverted>
              <DeleteView
                user={this.state.user}
                removeUser={this.removeUser}
                toggleDeleteUser={this.toggleDeleteUser}
                cons={this.props.cons}
              />
            </Segment>
          </DeleteWrap>
        ) : null}
        <ButtonWrap>
          <Button.Group>
            <Button animated primary onClick={this.toggleShowEditUser}>
              <Button.Content visible>Edit</Button.Content>
              <Button.Content hidden>
                <Icon name="edit" />
              </Button.Content>
            </Button>
            <Button animated color="red" onClick={this.toggleDeleteUser}>
              <Button.Content visible>Delete</Button.Content>
              <Button.Content hidden>
                <Icon name="ban" />
              </Button.Content>
            </Button>
            <Button animated color="green" onClick={this.toggleUser}>
              <Button.Content visible>User</Button.Content>
              <Button.Content hidden>
                <Icon name="user" />
              </Button.Content>
            </Button>
            <Button animated onClick={this.handleClick}>
              <Button.Content visible>Convention</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow circle left" />
              </Button.Content>
            </Button>
          </Button.Group>
        </ButtonWrap>
      </Grid>
    );
  }
}

export default withRouter(UserView);
