import React, { Component } from "react";
import { Form, Input, Container, Segment } from "semantic-ui-react";
import styled from "styled-components"


const FormWrap = styled.div`

margin-top: 120px;

`


class EditUserForm extends Component {
  render() {
    return (
      <FormWrap>
        <Container text textAlign="center">
          <Segment inverted color="orange">
            <Form onSubmit={this.props.handleSubmit}>
              <Segment.Group>
                <Segment inverted>
                  <Input
                    name="name"
                    value={this.props.user.name}
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.user.name}
                  />
                </Segment>
                <Segment inverted>
                  <Input
                    name="img"
                    value={this.props.user.img}
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.user.img}
                  />
                </Segment>
                <Segment inverted>
                  <Input
                    name="userSince"
                    value={this.props.user.userSince}
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.user.userSince}
                  />
                </Segment>
                <Segment inverted>
                  <Form.Input
                    name="favCon"
                    value={this.props.user.favCon}
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.user.favCon}
                  />
                </Segment>
                <Segment inverted>
                  <Form.TextArea
                    name="about"
                    value={this.props.user.about}
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder={this.props.user.about}
                  />
                </Segment>
              </Segment.Group>
              <Form.Button color="green" type="submit">Edit User</Form.Button>
            </Form>
          </Segment>
        </Container>
      </FormWrap>
    );
  }
}

export default EditUserForm;
