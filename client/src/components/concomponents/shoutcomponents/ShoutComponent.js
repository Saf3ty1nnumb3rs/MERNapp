import React, { Component } from "react";
import axios from "axios";
import { Input, Button, TextArea, Form } from "semantic-ui-react";



class ShoutComponent extends Component {


  
  removeShout = async user => {
    await axios.delete(
      `/api/cons/${this.props.consId}/shouts/${this.props.shouts._id}`
    );
    await this.props.getAllShouts();
  };


  
  handleChange = event => {
    this.props.handleShoutChange(event, this.props.shouts._id);
  };



  updateShout = async shout => {
    await axios.patch(
      `/api/cons/${this.props.consId}/shouts/${this.props.shouts._id}`,
      shout
    );
    await (res => {
      this.props.getAllShouts();
    });
  };

  render() {
    return (
      <Form>
        <Input
          focus
          size="small"
          type="text"
          name="subject"
          value={this.props.shouts.subject}
          onChange={this.handleChange}
          onBlur={() => this.updateShout(this.props.shouts)}
        />
        <br />
        <TextArea
          size="massive"
          name="msg"
          value={this.props.shouts.msg}
          onChange={this.handleChange}
          onBlur={() => this.updateShout(this.props.shouts)}
        />
        <h4>Date:{this.props.shouts.date}</h4>
        <Button 
        color="red"
        size="mini"
        onClick={this.removeShout}>Remove</Button>
      </Form>
    );
  }
}

export default ShoutComponent;
