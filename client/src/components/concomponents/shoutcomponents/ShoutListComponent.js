import React, { Component } from "react";
import ShoutComponent from "./ShoutComponent";
import { Container, Segment } from "semantic-ui-react";







class ShoutListComponent extends Component {
  render() {
    return (
      
        <Segment>
          {this.props.shouts.map((shout, i) => {
            return (
              <Segment key={this.props.shouts[i]._id}>
                <ShoutComponent
                  shouts={this.props.shouts[i]}
                  index={i}
                  consId={this.props.consId}
                  getAllShouts={this.props.getAllShouts}
                  handleShoutChange={this.props.handleShoutChange}
                />
              </Segment>
            );
          })}
        </Segment>
      
    );
  }
}

export default ShoutListComponent;
