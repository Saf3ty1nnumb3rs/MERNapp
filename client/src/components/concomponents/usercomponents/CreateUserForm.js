import React, { Component } from "react";
import axios from "axios";
import { Segment, Form, Input, Button, TextArea } from "semantic-ui-react";

class CreateUserForm extends Component {
  state = {
    name: "",
    img: "",
    userSince: 0,
    favCon: "",
    about: ""
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
      name: this.state.name,
      img: this.state.img,
      userSince: this.state.userSince,
      favCon: this.state.favCon,
      about: this.state.about
    };
    //2. Add user using passed down function
    console.log(this.props.consId);
    await axios.post(`/api/cons/${this.props.consId}/users`, payload);
    await this.props.toggleShowAddUser();
    await this.props.getAllUsers();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Segment.Group >
          <Segment>
            <Input
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
            />
          </Segment>
          <Segment>
            <Input
              onChange={this.handleChange}
              name="img"
              type="text"
              placeholder="Image"
              value={this.state.image}
            />
          </Segment>
          <Segment>
            <Input
              name="userSince"
              onChange={this.handleChange}
              type="text"
              placeholder="User Since"
              value={this.state.userSince}
            />
          </Segment>
          <Segment>
            <Input
              name="favCon"
              onChange={this.handleChange}
              type="text"
              placeholder="Favorite Con"
              value={this.state.favCon}
            />
          </Segment>
          <Segment>
            <TextArea
              name="about"
              onChange={this.handleChange}
              placeholder="About"
              type="text"
              value={this.state.about}
            />
          </Segment>
        </Segment.Group>
        <Button color="green" type="submit">+ Add User</Button>
      </Form>
    );
  }
}

export default CreateUserForm;
