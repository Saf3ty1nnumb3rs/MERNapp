import React, { Component } from 'react';
import { Link } from 'react-router-dom'




class LandingPage extends Component {
    render() {
        return (
            <div>
                <Link to="/cons"><h1> Home page lives here!!</h1> </Link>
            </div>
        );
    }
}

export default LandingPage;