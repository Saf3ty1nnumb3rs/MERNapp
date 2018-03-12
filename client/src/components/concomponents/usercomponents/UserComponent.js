import React, { Component } from "react";
import axios from "axios"


class UserComponent extends Component {

    removeUser = async (user) => {
    
        await axios.delete(`${this.props.consId}/users/${this.props.users._id}`)
        await this.props.getAllUsers()
    }
  render() {
    return (
      <div key={this.props.key}>
        <h3>{this.props.users.name}</h3>
        <img src={this.props.users.img} alt={this.props.users.name} />
        <h4>Since:{this.props.users.userSince}</h4>
        <h4>Fav Con:{this.props.users.favCon}</h4>
        <h4>About Me:{this.props.users.about}</h4>
        <button onClick={this.removeUser}>X</button>
      </div>
    );
  }
}

export default UserComponent;
