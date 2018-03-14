import React, { Component } from "react";
import axios from "axios";
import EditUserForm from "./EditUserForm";
import DeleteView from "./DeleteView";
import SingleUserComponent from "./SingleUserComponent";
import { withRouter } from 'react-router-dom'



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
      axios.get(`/api/cons/${this.props.match.params.consId}/users/${userId}`).then(res => {
        const user = {
          name: res.data.name,
          img: res.data.img,
          userSince: res.data.userSince,
          favCon: res.data.favCon,
          about: res.data.about
        };
        console.log({ user });
        this.setState({ user });
      });
    }
  }

  handleClick = () => {

    this.props.history.goBack(`cons/${this.props.match.params.consId}`)
  }

  removeUser = async user => {
    await axios.delete(`/api/cons/${this.props.match.params.consId}/users/${this.props.match.params.id}`);
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const userId = this.props.match.params.id;
    const userState = this.state.user;
    await axios.patch(`/api/cons/${userId}`, userState);
    this.toggleShowEditUser()
  };

  toggleUser = () => {
    this.setState({
      showEditUser: false,
      showDeleteView: false,
      userView: true
    })
  }

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
      <div>
        {this.state.showEditUser ? (
          <EditUserForm
            user={this.state.user}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        ) : null}

        {this.state.userView ? (
          <SingleUserComponent user={this.state.user} />
        ) : null}

        {this.state.showDeleteView ? (
          <DeleteView
            user={this.state.user}
            removeUser={this.removeUser}
            toggleDeleteUser={this.toggleDeleteUser}
            cons={this.props.cons}
          />
        ) : null}
        <button onClick={this.toggleShowEditUser}>Edit</button>
        <button onClick={this.toggleDeleteUser}>Delete</button>
        <button onClick={this.toggleUser}>User</button>
        <button onClick={this.handleClick}>Convention</button>
      </div>
    );
  }
}

export default withRouter(UserView);
