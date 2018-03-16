import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, Card, Image } from "semantic-ui-react";
import Navbar from "./Navbar";
import styled from "styled-components";

const ConsWrapper = styled.div`
  margin: 120px 15vw;
`;

const CardWrap = styled.div`
  margin: 0 auto;
`;

class ConsView extends Component {
  // STATE ----------------------->
  state = {
    cons: []
  };

  // WILL MOUNT --------------------->
  componentWillMount() {
    this.getAllCons();
  }

  // FUNCTIONS ------------------------>
  getAllCons = async () => {
    const res = await axios.get("/api/cons");
    console.log(res.data);
    this.setState({ cons: res.data });
  };

  render() {
    return (
      <div>
        <Navbar />
        <ConsWrapper>
          <Grid stackable centered>
            {this.state.cons.map(con => {
              return (
                <Grid.Column centered width={3}>
                  <CardWrap>
                    <Card centered>
                      <Link
                        key={con._id}
                        to={`/cons/${con._id}`}
                        cons={this.state.cons}
                      >
                        <h3>{con.name}</h3>
                        <Image fluid src={con.img} alt={con.name} />
                      </Link>
                    </Card>
                  </CardWrap>
                </Grid.Column>
              );
            })}
          </Grid>
        </ConsWrapper>
      </div>
    );
  }
}

export default ConsView;
