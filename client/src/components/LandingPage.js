import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"


const MainWrap = styled.div`
background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Des_polyedriques.svg/1000px-Des_polyedriques.svg.png');
background-color: #FFD404;
min-height: 100vh;
min-width: 120vw;
height: auto;
background-size: cover;
background-repeat: no-repeat;
position: relative;
background-position: 30% 50%;
height: 100%;
margin: 0 auto;
`;
const LinkWrap = styled.div`
h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    margin-left: 10vw;
    padding-top: 9vh;
    color: #E8543C;
    position: absolute;
    font-family: 'Audiowide', cursive;
    font-size: 400px;
    z-index: 999;
    span{
      font-family: 'Courgette', cursive;
      font-size: 400px;
    };
}
`
const SecondWrap = styled.div`
h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    margin-left: 15vw;
    padding-top: 16vh;
    color: black;
    position: relative; 
    font-family: 'Audiowide', cursive;
    font-size: 400px;
    z-index: 3;
    span {
      font-family: 'Courgette', cursive;
      font-size: 400px;
    };
}
`


class LandingPage extends Component {
    render() {
        return (
            <MainWrap>
                <LinkWrap>
                <Link to="/cons"><h1> <span>i</span>Con</h1> </Link>
                </LinkWrap>
                <SecondWrap><h1> <span>i</span>Con</h1> </SecondWrap>
            </MainWrap>
        );
    }
}

export default LandingPage;