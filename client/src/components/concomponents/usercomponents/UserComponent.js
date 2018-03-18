import React, { Component } from "react";
import { Image, Card } from "semantic-ui-react";
import styled from "styled-components";

const UserWrap = styled.div`
  margin-top: 9px;
`;

const ImageWrapper = styled.div`
  min-width: 100px;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
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
        <Card centered key={this.props.key}>
          <ImageWrapper>
            <Image fluid src={this.props.users.img} alt={this.props.users.name} />
          </ImageWrapper>
          <Card.Content>
            <Card.Header>{this.props.users.name}</Card.Header>
            <Card.Meta>
              <span>Since:</span>
              {this.props.users.userSince}
            </Card.Meta>
            <Card.Meta>
              <span>Fav Con:</span>
              {this.props.users.favCon}
            </Card.Meta>
            <Card.Description>
              {this.props.users.about}
            </Card.Description>
          </Card.Content>
        </Card>
      </UserWrap>
    );
  }
}

export default UserComponent;
