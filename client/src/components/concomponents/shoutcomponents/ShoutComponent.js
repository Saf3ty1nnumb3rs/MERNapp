import React, { Component } from "react";
import axios from "axios";

class ShoutComponent extends Component {


  removeShout = async user => {
    await axios.delete(`/api/${this.props.consId}/shouts/${this.props.shouts._id}`);
    await this.props.getAllShouts();
  };
  handleChange = event => {
    this.props.handleShoutChange(event, this.props.shouts._id);
  };
  updateShout = shout => {
    axios
      .patch(`/api/cons/${this.props.consId}/shouts/${this.props.shouts._id}`, shout)
      .then(res => {
          this.props.getAllShouts();
      });
  };

  render() {
    console.log(this.props.index);
    console.log(this.props.shouts._id);
    console.log("hi");
    return (
      <div>
        <br />
        <input
          type="text"
          name="title"
          value={this.props.shouts.subject}
          onChange={this.handleChange}
          onBlur={() => this.updateShout(this.props.shouts)}
        />
        <textarea
          name="description"
          value={this.props.shouts.msg}
          onChange={this.handleChange}
          onBlur={() => this.updateShout(this.props.shouts)}
        />
        <h4>Date:{this.props.shouts.date}</h4>
        <button onClick={this.removeShout}>X</button>
      </div>
    );
  }
}

export default ShoutComponent;
