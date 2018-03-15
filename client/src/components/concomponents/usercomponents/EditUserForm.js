import React, { Component } from "react";
import {
  Form,
  Input,
  Container,
  Segment,
} from "semantic-ui-react";

class EditUserForm extends Component {
  render() {
    return (
      <Container text textAlign="center">
        <Segment>
          <Form onSubmit={this.props.handleSubmit}>
            <Segment.Group>
              <Segment>
                <Input
                  name="name"
                  value={this.props.user.name}
                  type="text"
                  onChange={this.props.handleChange}
                  placeholder={this.props.user.name}
                />
              </Segment>
              <Segment>
                <Input
                  name="img"
                  value={this.props.user.img}
                  type="text"
                  onChange={this.props.handleChange}
                  placeholder={this.props.user.img}
                />
              </Segment>
              <Segment>
                <Input
                  name="userSince"
                  value={this.props.user.userSince}
                  type="text"
                  onChange={this.props.handleChange}
                  placeholder={this.props.user.userSince}
                />
              </Segment>
              <Segment>
                <Form.Input
                  name="favCon"
                  value={this.props.user.favCon}
                  type="text"
                  onChange={this.props.handleChange}
                  placeholder={this.props.user.favCon}
                />
              </Segment>
              <Segment>
                <Form.TextArea
                  name="about"
                  value={this.props.user.about}
                  type="text"
                  onChange={this.props.handleChange}
                  placeholder={this.props.user.about}
                />
              </Segment>
            </Segment.Group>
            <Form.Button type="submit">Edit User</Form.Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default EditUserForm;
