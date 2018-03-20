import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
  
  position: fixed;
  top: 0;
  width: 100vw;
  min-height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFD404;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Des_polyedriques.svg/1000px-Des_polyedriques.svg.png');
  z-index: 1;
  border-bottom: 1px solid rgb(33, 37, 34);
  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2);
  min-width: 340px;
  letter-spacing: 0.2em;
  font-family: "Audiowide", cursive;
  h1 {
    border-left: 1px solid #e8543c;
    color: #e8543c;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    margin: auto;
    margin-right: 9vw;
    padding-left: 1vw;
    text-shadow: 8px 2px #40403f;
    font-family: "Audiowide", cursive;
    font-size: 46px;
    span {
      font-family: "Courgette", cursive;
      font-size: 46px;
    }
  }
`;
const NavLinkWrap = styled.div`
  text-align: center;
  display: inline-flex;
  white-space: nowrap;
  font-size: 28px;
  .inner-nav {
    padding: 0 2vw;
    span {
      font-family: "Courgette", cursive;
    }
    a,
    a:visited {
      color: #e8543c;
      text-shadow: 3px 2px #40403f;
    }
  }
`;

class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <NavLinkWrap>
          <div className="inner-nav">
            <Link to="/">Home</Link>
          </div>
          <div className="inner-nav">
            <Link to="/cons">
              <span>i</span>CONS
            </Link>
          </div>
        </NavLinkWrap>
        <Link to="/">
          <h1>
            <span>i</span>CON
          </h1>
        </Link>
      </NavWrap>
    );
  }
}

export default Navbar;
