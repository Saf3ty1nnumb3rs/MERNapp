import React, { Component } from "react";
import { Image, Container } from "semantic-ui-react"

class UserComponent extends Component {

    
  render() {
    return (
      <Container key={this.props.key}>
        <h3>{this.props.users.name}</h3>
        <Image fluid src={this.props.users.img} alt={this.props.users.name} />
        <h4>Since:{this.props.users.userSince}</h4>
        <h4>Fav Con:{this.props.users.favCon}</h4>
        <h4>About Me:{this.props.users.about}</h4>
      </Container>
    );
  }
}

export default UserComponent;
