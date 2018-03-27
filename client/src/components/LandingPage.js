import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"


const MainWrap = styled.div`
background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Des_polyedriques.svg/1000px-Des_polyedriques.svg.png');
background-color: #FFD404;
background-attachment: fixed;
min-height: 120vh;
min-width: 120vw;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
position: relative;
background-position: 30% 50%;
height: 100%;
margin: 0 auto;
h1 {
    font-family: 'Courgette', cursive;
    width: 100vw;
    padding-top: 14vh;
}
`;
const LinkWrap = styled.div`
h1 {
    font-style: normal;
    letter-spacing: 6vw;
    width: 100w;
    font-weight: 400;
    padding-top: 1vh;
    color: #E8543C;
    position: absolute;
    font-family: 'Audiowide', cursive;
    font-size: 35vw;
    z-index: 999;
    span{
      font-family: 'Courgette', cursive;
      font-size: 35vw;
    };
}
`
const SecondWrap = styled.div`
p {
    font-family: 'Courgette', cursive;
    margin-left: 36vw;
    font-size: 3vw;
    text-shadow: 1px 1px whitesmoke;
    
}
h1 {
    font-style: normal;
    letter-spacing: 6vw;
    font-weight: 400;
    margin-left: 4vw;
    margin-bottom: 0;
    padding-top: 4vh;
    color: #40403F;
    /* position: relative;  */
    font-family: 'Audiowide', cursive;
    font-size: 38vw;
    z-index: 3;
    span {
      font-family: 'Courgette', cursive;
      font-size: 38vw;
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
                <SecondWrap><h1> <span>i</span>Con</h1> 
                <p>* meet before you meet *</p></SecondWrap>
                
            </MainWrap>
        );
    }
}

export default LandingPage;