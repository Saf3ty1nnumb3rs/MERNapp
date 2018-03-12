import React, { Component } from 'react';

class ShoutComponent extends Component {
    render() {
        return (
            <div>
            <br />
              <h3>Subj:{this.props.shouts.subject}</h3>
              <h4>Msg:{this.props.shouts.msg}</h4>
              <h4>Date:{this.props.shouts.date}</h4>
            </div>
        );
    }
}

export default ShoutComponent;