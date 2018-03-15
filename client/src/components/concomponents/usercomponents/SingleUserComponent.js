import React, { Component } from "react";
import { Container, Segment, Image } from "semantic-ui-react";
class SingleUserComponent extends Component {
  render() {
    return (
          <Container>
              
            <h1>{this.props.user.name}</h1>
            <Image circular src={this.props.user.img} alt={this.props.user.name} />
            <Segment>
              <h2>{this.props.user.userSince}</h2>
              <h3>{this.props.user.favCon}</h3>
              <h4>{this.props.user.about}</h4>
            </Segment>
            
          </Container>
    );
  }
}

export default SingleUserComponent;
