import React, { Component } from "react";
import { Image, Container, Segment } from "semantic-ui-react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  min-width: 200px;
  max-width: 400px;
  height: auto;
  Image {
    border-radius: 50%;
  }
`;

class UserComponent extends Component {
  render() {
    return (
      <Segment>
        <Container key={this.props.key}>
          <h3>{this.props.users.name}</h3>
          <ImageWrapper>
            <Image
              src={this.props.users.img}
              alt={this.props.users.name}
            />
          </ImageWrapper>
          <Segment>
            <h4>Since:{this.props.users.userSince}</h4>
            <h4>Fav Con:{this.props.users.favCon}</h4>
            <h4>About Me:{this.props.users.about}</h4>
          </Segment>
        </Container>
      </Segment>
    );
  }
}

export default UserComponent;
