import React, { Component } from 'react';






class DeleteView extends Component {


    


    render() {
        return (
            <div>
         <h1>Are you sure you want to delete </h1> 
         <button onClick={this.props.removeUser}>Yes</button>      
         <button onClick={this.props.toggleDeleteUser}>No</button>
            </div>
        );
    }
}

export default DeleteView;