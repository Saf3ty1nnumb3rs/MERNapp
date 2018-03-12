import React, { Component } from "react";

class ConComponent extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.con.name}</h2>
        <img src={this.props.con.img} alt={this.props.con.name} />
        <h2>{this.props.con.theme}</h2>
        <h3>{this.props.con.location}</h3>
        <h3>{this.props.con.date}</h3>
        <h4>{this.props.con.user}</h4>
      </div>
    );
  }
}

export default ConComponent;
