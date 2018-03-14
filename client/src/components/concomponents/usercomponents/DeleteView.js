import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class DeleteView extends Component {
  
    handleClick = () => {
    
        this.props.removeUser()
        this.props.history.goBack(`cons/${this.props.match.params.consId}`)

    }

    render() {
        return (
            <div>
         <h1>Are you sure you want to delete </h1> 
         <button onClick={this.handleClick}>Yes</button>      
         <button onClick={this.props.toggleDeleteUser}>No</button>
            </div>
        );
    }
}

export default withRouter(DeleteView)