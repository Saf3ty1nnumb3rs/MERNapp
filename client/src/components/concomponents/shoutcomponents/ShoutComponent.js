import React, { Component } from "react";
import axios from "axios";

class ShoutComponent extends Component {
  removeShout = async user => {
    await axios.delete(`${this.props.consId}/shouts/${this.props.shouts._id}`);
    await this.props.getAllShouts();
  };

  render() {
      console.log(this.props.index)
      console.log(this.props.shouts._id)
      console.log('hi')
    return (
      <div>
        <br />
        <h3>Subj:{this.props.shouts.subject}</h3>
        <h4>Msg:{this.props.shouts.msg}</h4>
        <h4>Date:{this.props.shouts.date}</h4>
        <button onClick={this.removeShout}>X</button>        
      </div>
    );
  }
}

export default ShoutComponent;
