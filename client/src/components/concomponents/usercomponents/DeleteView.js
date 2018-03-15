import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Card, Container } from "semantic-ui-react";
class DeleteView extends Component {
  handleClick = () => {
    this.props.removeUser();
    this.props.history.goBack(`cons/${this.props.match.params.consId}`);
  };

  render() {
    return (
      <Container text>
        <Card>
          <h1>Are you sure you want to delete ?</h1>
          </Card>
          <Button color="red" onClick={this.handleClick}>
            Delete
          </Button>
          <Button color="green" onClick={this.props.toggleDeleteUser}>
            Return
          </Button>
        
      </Container>
    );
  }
}

export default withRouter(DeleteView);
