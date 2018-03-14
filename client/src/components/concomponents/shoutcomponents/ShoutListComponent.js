import React, { Component } from "react";
import ShoutComponent from "./ShoutComponent"
import axios from "axios" 

class ShoutListComponent extends Component {

  

  render() {
    
    return (
      <div>
        {this.props.shouts.map((shout, i) => {
          console.log(this.props.shouts[i]._id)
          return (
            <div key={this.props.shouts[i]._id}>
              <ShoutComponent shouts={this.props.shouts[i]} index={i} consId={this.props.consId} getAllShouts={this.props.getAllShouts}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShoutListComponent;
