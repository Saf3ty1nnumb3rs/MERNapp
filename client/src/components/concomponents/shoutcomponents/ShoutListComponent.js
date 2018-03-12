import React, { Component } from "react";
import ShoutComponent from "./ShoutComponent"
 

class ShoutListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.shouts.map((shout, i) => {
          return (
            <div key={this.props.shouts[i]._id}>
              <ShoutComponent shouts={this.props.shouts[i]} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShoutListComponent;
