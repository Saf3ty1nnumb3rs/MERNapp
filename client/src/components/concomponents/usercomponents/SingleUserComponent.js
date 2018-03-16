import React, { Component } from "react";
import { Container, Segment, Image, Grid } from "semantic-ui-react";
import styled from "styled-components";

const SingleUserWrap = styled.div`
  margin: 10px;
`;

const ImageWrap = styled.div`


  max-width: 240px;
  min-width: 120px;
  height: auto;
  margin: 8px;

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
