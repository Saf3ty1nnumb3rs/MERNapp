import React, { Component } from "react";
import axios from "axios";
import EditUserForm from "./EditUserForm";
import DeleteView from "./DeleteView"
import SingleUserComponent from './SingleUserComponent'



class UserView extends Component {
  state = {
    user: {},
    showEditUser: false,
    showDeleteView: false,
    userView: true
  };

  componentWillMount() {
    if (this.props.match.params) {
      const userId = this.props.match.params.id;
      axios.get(`${userId}`).then(res => {
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
  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state.user };
    newState[name] = event.target.value;
    this.setState({user: newState});
  };

  handleSubmit = event => {
    event.preventDefault();
    const userId = this.props.match.params.id;
    const userState = this.state.user;
    axios.patch(`${userId}`, userState);
  };

  toggleShowEditUser = async () => {
    await this.setState({ 
      showEditUser: !this.state.showEditUser
    }); 
    {this.state.showEditUser ? 
      (
        await this.setState({
           showDeleteView: false,
           userView: false
         }) 
      ) : (
        await this.setState({
          showDeleteView: false,
          userView: true
         })
      )}
    }
    

  toggleDeleteUser = () => {
    this.setState({
      showEditUser: false,
      showDeleteView: !this.state.showDeleteView,
      userView: false
    })
  }

  render() {
    return (
      <div>
        {this.state.showEditUser ? (
          <EditUserForm
            user={this.state.user}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        ) : (
          null
          )}

          {this.state.userView ? (
          <SingleUserComponent 
          user={this.state.user}
          />
          ) : (
            null
          )}
            

        {this.state.showDeleteView ? (
          <DeleteView 
          user={this.state.user}
          /> ) : (
          null
        )}
        <button onClick={this.toggleShowEditUser}>Edit</button>
        <button onClick={this.toggleDeleteUser}>Delete</button>
      </div>
    );
  }
}

export default UserView;
