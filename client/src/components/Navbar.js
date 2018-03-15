import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div>
        <h1><span>i</span>CON</h1>
        <Link to="/">Home</Link>
        <Link to="/cons">iCONS</Link>
      </div>
    );
  }
}

export default Navbar;
