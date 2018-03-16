import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 1;
  border-bottom: 1px solid rgb(33, 37, 34);
  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2);
  min-width: 340px;
  letter-spacing: 0.1em;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    margin-left: 20px;
    color: rgb(0, 163, 228);
    text-shadow: 1px 1px #6790a0;
    font-family: 'Audiowide', cursive;
    font-size: 46px;
    span{
      font-family: 'Courgette', cursive;
      font-size: 46px;
    }
  }
  .right-nav {
    padding-right: 5%;
    text-align: center;
    display: inline-flex;
    white-space: nowrap;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <h1>
        <Link to="/"><span>i</span>CON</Link>
        </h1>
        <div className="right-nav">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/cons">iCONS</Link>
          </div>
        </div>
      </NavWrap>
    );
  }
}

export default Navbar;
