import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { Grid } from "semantic-ui-react"

const MainWrap = styled.div`
background-image: url('https://media-beta.wsbtv.com/photo/2017/09/02/Dragon%20con%20_OP_512_CP__1504374167205_9036930_ver1.0_1280_720.JPG');
min-height: 100vh;
min-width: 110vw;
background-size: cover;
background-repeat: no-repeat;
background-position: 20% 40%;
height: 100%;
h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    margin-left: 20px;
    color: red;
    text-shadow: 1px 1px #6790a0;
    font-family: 'Audiowide', cursive;
    font-size: 80px;
    span{
      font-family: 'Courgette', cursive;
      font-size: 80px;
    };
}
`;



class LandingPage extends Component {
    render() {
        return (
            <MainWrap>
                <Grid centered>
                <Link to="/cons"><h1> <span>i</span>Con</h1> </Link>
                </Grid>
            </MainWrap>
        );
    }
}

export default LandingPage;