import React, { Component } from "react";
import UserComponent from "./UserComponent";
import { Link } from "react-router-dom";

class UserListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => {
          return (
            <Link
              to={`/cons/${this.props.consId}/users/${user._id}`}
              key={this.props.users[i]._id}
              user={user}
            >
              <UserComponent
                getAllUsers={this.props.getAllUsers}
                users={this.props.users[i]}
                consId={this.props.consId}
              />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default UserListComponent;
