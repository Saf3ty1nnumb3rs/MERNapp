import React, { Component } from "react";
import { Container, Segment, Image, Grid } from "semantic-ui-react";
import styled from "styled-components";

const SingleUserWrap = styled.div`
  margin: 10px auto;
  min-width: 220px;
`;

const ImageWrap = styled.div`


  max-width: 240px;
  min-width: 180px;
  height: auto;
  margin: 8px;
  img {
    box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2);
  }

`
class SingleUserComponent extends Component {
  render() {
    return (
      <SingleUserWrap>
        <Container textAlign="center">
          <h1>{this.props.user.name}</h1>
          <Grid centered>
            <ImageWrap>
            <Image
              circular
              src={this.props.user.img}
              alt={this.props.user.name}
            />
            </ImageWrap>
          </Grid>
          <Segment>
            <h2>{this.props.user.userSince}</h2>
            <h3>{this.props.user.favCon}</h3>
            <h4>{this.props.user.about}</h4>
          </Segment>
        </Container>
      </SingleUserWrap>
    );
  }
}

export default SingleUserComponent;
