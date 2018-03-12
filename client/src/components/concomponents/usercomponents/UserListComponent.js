import React, { Component } from "react";
import UserComponent from './UserComponent'




class UserListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => {
          return (
            <div key={this.props.users[i]._id}>
              <UserComponent users={this.props.users[i]} /> 
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserListComponent;
