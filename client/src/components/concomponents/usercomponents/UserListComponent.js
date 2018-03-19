import React, { Component } from "react";
import UserComponent from "./UserComponent";
import { Link } from "react-router-dom";
import styled from "styled-components"

const ListWrap = styled.div`
background-color: rgba(212,212,208,.9) ;
`



class UserListComponent extends Component {
  render() {
    return (
      <ListWrap>
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
      </ListWrap>
    );
  }
}

export default UserListComponent;
