import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";

class ConComponent extends Component {
  render() {
    return (
      <Container textAlign="center" >
        <h2>{this.props.con.name}</h2>
        <Image fluid src={this.props.con.img} alt={this.props.con.name} />
        <h2>{this.props.con.theme}</h2>
        <h3>{this.props.con.location}</h3>
        <h3>{this.props.con.date}</h3>
        <h4>{this.props.con.user}</h4>
      </Container>
    );
  }
}

export default ConComponent;
