import React, { Component } from "react";
import axios from "axios";

class CreateUserForm extends Component {
  state = {
    name: "",
    img: "",
    userSince: 0,
    favCon: "",
    about: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async event => {
    //1. Stop form from submitting
    event.preventDefault();
    const payload = {
      name: this.state.name,
      img: this.state.img,
      userSince: this.state.userSince,
      favCon: this.state.favCon,
      about: this.state.about
    }
    //2. Add user using passed down function
   
    await axios.post(`${this.props.consId}/users`, payload);
    await this.props.getAllUsers();
   
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          onChange={this.handleChange}
          type="text"
          placeholder="Name"

        />
        <input
          onChange={this.handleChange}
          name="img"
          type="text"
          placeholder="Image"
          value={this.state.image}
        />
        <input
          name="userSince"
          onChange={this.handleChange}
          type="text"
          placeholder="User Since"
          value={this.state.userSince}
        />
        <input
          name="favCon"
          onChange={this.handleChange}
          type="text"
          placeholder="Favorite Con"
          value={this.state.favCon}
        />
        <textarea
          name="about"
          onChange={this.handleChange}
          placeholder="About"
          type="text"
          value={this.state.about}        
        />

        <button type="submit">+ Add User</button>
      </form>
    );
  }
}

export default CreateUserForm;
