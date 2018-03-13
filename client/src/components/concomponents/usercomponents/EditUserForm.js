import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class EditUserForm extends Component {

        state = {
            updated: false
        }
    
        
    

changeState = () => {
    console.log('Did it')
    this.setState({
        updated: !this.state.updated
    })

}




  render() {
    if (this.state.updated === true) {
        // const consId = this.props.match.params.id
        // return <Redirect to={`/cons/${consId}`} />
        
    }
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="name"
          value={this.props.user.name}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.name}
        />
        <input
          name="img"
          value={this.props.user.img}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.img}
        />
        <input
          name="userSince"
          value={this.props.user.userSince}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.userSince}
        />
        
        <input
          name="favCon"
          value={this.props.user.favCon}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.favCon}
        />
        <input
          name="about"
          value={this.props.user.about}
          type="text"
          onChange={this.props.handleChange}
          placeholder={this.props.user.about}
        />
        <button type="submit" onClick={this.props.toggleShowEditUser}>
         Edit User
        </button>
      </form>
    );
  }
}

export default EditUserForm;
