import React, { Component } from "react";
import UserComponent from './UserComponent'
import { Link } from 'react-router-dom'



class UserListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => {
          return (
            <Link key={this.props.users[i]._id} to={`/cons/${this.props.consId}/user/${this.props.users[i]._id}`}>
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
