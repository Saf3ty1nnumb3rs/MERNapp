import React, { Component } from "react";
import axios from "axios";
import { Form, Button, TextArea, Container, Icon } from "semantic-ui-react";
import styled from "styled-components"


const FormWrap = styled.div`


`
const ButtonWrap = styled.div`
  text-align: center;
  margin-top: 10px;
`;

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
    //2. Add user shouts passed down function
    await axios.post(`/api/cons/${this.props.consId}/shouts`, payload);
    await this.props.toggleShowShout();
    await this.props.getAllShouts();
    this.setState({ subject: "", msg: "" });
  };

  render() {
    return (
      <FormWrap>
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

          <ButtonWrap>
                <Button animated color="green" type="submit">
                  <Button.Content visible>Shout!</Button.Content>
                  <Button.Content hidden>
                    <Icon name="comments" />
                  </Button.Content>
                </Button>
              </ButtonWrap>
        </Form>
     </FormWrap>
    );
  }
}

export default CreateShoutForm;
