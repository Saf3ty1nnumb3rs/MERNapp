import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react"
class EditUserForm extends Component {
  

  render() {
   
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input
          name="name"
          value={this.props.user.name}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.name}
        />
        <Input
          name="img"
          value={this.props.user.img}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.img}
        />
        <Input
          name="userSince"
          value={this.props.user.userSince}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.userSince}
        />

        <Input
          name="favCon"
          value={this.props.user.favCon}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.favCon}
        />
        <Input
          name="about"
          value={this.props.user.about}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.about}
        />
        <Button type="submit" onClick={this.props.toggleShowEditUser}>
          Edit User
        </Button>
      </Form>
    );
  }
}

export default EditUserForm;
