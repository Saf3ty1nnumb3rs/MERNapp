import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Card, Container, Icon } from "semantic-ui-react";
class DeleteView extends Component {
  handleClick = () => {
    this.props.removeUser();
    this.props.history.goBack(`cons/${this.props.match.params.consId}`);
  };

  render() {
    return (
      <Container text textAlign="center">
        <Card>
          <h1>Are you sure you want to delete ?</h1>
          <Button.Group>
            <Button animated color="red" onClick={this.handleClick}>
              <Button.Content visible>Delete</Button.Content>
              <Button.Content hidden>
                <Icon name="ban" />
              </Button.Content>
            </Button>
            <Button
              animated
              color="green"
              onClick={this.props.toggleDeleteUser}
            >
              <Button.Content visible>Return</Button.Content>
              <Button.Content hidden>
                <Icon name="user" />
              </Button.Content>
            </Button>
          </Button.Group>
        </Card>
      </Container>
    );
  }
}

export default withRouter(DeleteView);
