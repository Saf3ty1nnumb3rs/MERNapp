import React, { Component } from 'react';

class SingleUserComponent extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.user.name}</h1>
            <img src={this.props.user.img} alt={this.props.user.name} />
            <h2>{this.props.user.userSince}</h2>
            <h3>{this.props.user.favCon}</h3>
            <h4>{this.props.user.about}</h4>
            </div>
        );
    }
}

export default SingleUserComponent;