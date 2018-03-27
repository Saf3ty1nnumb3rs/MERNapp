import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, Card, Image } from "semantic-ui-react";
import Navbar from "./Navbar";
import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 0 auto;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Des_polyedriques.svg/1000px-Des_polyedriques.svg.png");
  background-size: cover;
  background-repeat: repeat;
  background-color: #ffffff;
  height: 101vh;
  width: 100vw;
`;

const ConsWrap = styled.div`
  padding-top: 150px;
`;
const CardWrap = styled.div`
  margin: 0;
  a {
    color: #40403f;
    box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.4);
    img {
      border-radius: 4px;
    }
  }
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

    this.setState({ cons: res.data });
  };

  render() {
    return (
      <PageWrapper>
        <Navbar />
        <ConsWrap>
          <Grid stackable centered>
            {this.state.cons.map(con => {
              return (
                <Grid.Column key={con._id + "id"} width={5}>
                  <CardWrap>
                    <Card id="card" raised centered>
                      <Link
                        key={con._id}
                        to={`/cons/${con._id}`}
                        cons={this.state.cons}
                      >
                        <Card.Header textAlign="center">
                          <h3>{con.name}</h3>
                        </Card.Header>
                        <Image fluid src={con.img} alt={con.name} />
                      </Link>
                    </Card>
                  </CardWrap>
                </Grid.Column>
              );
            })}
          </Grid>
        </ConsWrap>
      </PageWrapper>
    );
  }
}

export default ConsView;
