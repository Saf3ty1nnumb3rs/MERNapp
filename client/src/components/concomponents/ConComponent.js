import React, { Component } from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";




const ImageWrap = styled.div`
  max-width: 360px;
  margin: 0 auto;
  img {
    box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.3);
  }
`;

class ConComponent extends Component {
  render() {
    return (
      <Segment id="bgcolor">
        <Container textAlign="center">
          <h2>{this.props.con.name}</h2>
          <ImageWrap>
            <Image rounded src={this.props.con.img} alt={this.props.con.name} />
          </ImageWrap>
          <h2>{this.props.con.theme}</h2>
          <h3>{this.props.con.location}</h3>
          <h3>{this.props.con.date}</h3>
          <h4>{this.props.con.user}</h4>
        </Container>
      </Segment>
    );
  }
}

export default ConComponent;
