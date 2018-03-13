import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class EditUserForm extends Component {

        state = {
            name: "",
            img: "",
            userSince: "",
            favCon: "",
            about: "",
            updated: false
        }
    
        updateState = (userId) => {
            const consId = this.key
            axios.get(`cons/${consId}/users/${userId}`)
                .then((res) => this.setState(res.data))
                .catch((error) => { console.log(error) })
        }
    
        handlChange = (event) => {
            this.setState({ [event.target.name]: event.target.value })
            event.preventDefault()
        }
        handleChange = event => {
            const name = event.target.name;
            const newState = { ...this.state };
            newState[name] = event.target.value;
            this.setState(newState);
          };
        
    
        handleSubmit = (event) => {
            const consId = this.props.match.params.consId
            const userId = this.props.match.params.id
            axios.patch(`cons/${consId}/users/${userId}`,
                {
                    name: this.state.name,
                    img: this.state.img,
                    userSince: this.state.userSince,
                    favCon: this.state.favCon,
                    about: this.state.about
                }
            )
                .then(res => {
                    this.setState({
                       name: res.data.name,
                       img: res.data.img,
                        userSince: res.data.userSince,
                        favCon: res.data.favCon,
                        about: res.data.about,
                        updated: "true"
                    })
                })
                .catch((error) => { console.log(error) })
            event.preventDefault()
        }
    
        componentWillMount() {
            this.updateState(localStorage.userId)
        }
    





  render() {
    if (this.state.updated === "true") {
        const consId = this.props.match.params.consId
        return (<Redirect to={`/cons/${consId}`} />)
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          type="text"
          onChange={this.handleChange}
          placeholder={this.props.user.name}
        />
        <input
          name="img"
          value={this.state.img}
          type="text"
          onChange={this.handleChange}
          placeholder={this.props.user.img}
        />
        <input
          name="userSince"
          value={this.state.userSince}
          type="text"
          onChange={this.handleChange}
          placeholder={this.props.user.userSince}
        />
        
        <input
          name="favCon"
          value={this.state.favCon}
          type="text"
          onChange={this.handleChange}
          placeholder={this.props.user.favCon}
        />
        <input
          name="about"
          value={this.state.about}
          type="text"
          onChange={this.handleChange}
          placeholder={this.props.user.about}
        />
        <button >
         Edit User
        </button>
      </form>
    );
  }
}

export default EditUserForm;
