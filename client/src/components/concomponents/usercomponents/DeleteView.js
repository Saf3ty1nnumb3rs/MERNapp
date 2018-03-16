import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Card, Container, Icon, Grid } from "semantic-ui-react";
import styled from "styled-components";

const DeleteWrapper = styled.div`
  margin-top: 120px;
`;

class DeleteView extends Component {
  handleClick = () => {
    this.props.removeUser();
    this.props.history.goBack(`cons/${this.props.match.params.consId}`);
  };

  render() {
    return (
      <DeleteWrapper>
        <Container text textAlign="center">
          <Grid centered>
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
          </Grid>
        </Container>
      </DeleteWrapper>
    );
  }
}

export default withRouter(DeleteView);
