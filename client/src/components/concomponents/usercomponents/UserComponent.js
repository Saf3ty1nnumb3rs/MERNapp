import React, { Component } from "react";
import { Image, Container, Segment } from "semantic-ui-react";
import styled from "styled-components";



const UserWrap = styled.div`
margin-top: 5px;
`;

const ImageWrapper = styled.div`
  min-width: 190px;
  max-width: 400px;
  height: auto;
  img {
    border-radius: 5px;
    box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
`;

class UserComponent extends Component {
  render() {
    return (
      <UserWrap>
        <Container key={this.props.key}>
          <h3>{this.props.users.name}</h3>
          <ImageWrapper>
            <Image src={this.props.users.img} alt={this.props.users.name} />
          </ImageWrapper>
          <Segment raised>
            <h3>
              <span>Since:</span>
              {this.props.users.userSince}
            </h3>
            <h3>
              <span>Fav Con:</span>
              {this.props.users.favCon}
            </h3>
            <h3>
              <span>About Me:</span>
              {this.props.users.about}
            </h3>
          </Segment>
        </Container>
      </UserWrap>
    );
  }
}

export default UserComponent;
