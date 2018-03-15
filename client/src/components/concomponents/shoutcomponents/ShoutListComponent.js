import React, { Component } from "react";
import ShoutComponent from "./ShoutComponent";
import { Container, Segment } from "semantic-ui-react";







class ShoutListComponent extends Component {
  render() {
    return (
      <Container>
        <Segment>
          {this.props.shouts.map((shout, i) => {
            console.log(this.props.shouts[i]._id);
            return (
              <Container key={this.props.shouts[i]._id}>
                <ShoutComponent
                  shouts={this.props.shouts[i]}
                  index={i}
                  consId={this.props.consId}
                  getAllShouts={this.props.getAllShouts}
                  handleShoutChange={this.props.handleShoutChange}
                />
              </Container>
            );
          })}
        </Segment>
      </Container>
    );
  }
}

export default ShoutListComponent;
