import React, { Component } from "react";
import axios from "axios";
import { Form, Button, TextArea, Container } from "semantic-ui-react";

class CreateShoutForm extends Component {
  state = {
    subject: "",
    msg: "",
    date: `${Date.now()}`
  };

  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async event => {
    //1. Stop form from submitting
    event.preventDefault();
    const payload = {
      subject: this.state.subject,
      msg: this.state.msg,
      date: this.state.date
    };
    //2. Add user using passed down function
    await axios.post(`/api/cons/${this.props.consId}/shouts`, payload);
    await this.props.toggleShowShout();
    await this.props.getAllShouts();
    this.setState({ subject: "", msg: "" });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          
          <Form.Input
            transparent
            name="subject"
            onChange={this.handleChange}
            type="text"
            placeholder="Subject"
            value={this.state.subject}
          />
          <TextArea
            transparent
            name="msg"
            onChange={this.handleChange}
            placeholder="Shout it out!"
            type="text"
            value={this.state.msg}
          />

          <Button color="green" type="submit">+ Add Shout</Button>
        </Form>
     </Container>
    );
  }
}

export default CreateShoutForm;
