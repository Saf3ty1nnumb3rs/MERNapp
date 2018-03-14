import React, { Component } from "react";
import axios from "axios";

class CreateShoutForm extends Component {
  state = {
    subject: "",
    msg: "",
    date: `${Date.now()}`
  };



  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async event => {
    //1. Stop form from submitting
    event.preventDefault();
    const payload = {
      subject: this.state.subject,
      msg: this.state.msg,
      date: this.state.date,
    }
    //2. Add user using passed down function
    console.log(this.props.consId)
    await axios.post(`/api/cons/${this.props.consId}/shouts`, payload);
    await this.props.getAllShouts();
    this.setState( {subject:'', msg: ''} )
    
   
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="subject"
          onChange={this.handleChange}
          type="text"
          placeholder="Subject"
          value={this.state.subject}
        />
        <textarea
          name="msg"
          onChange={this.handleChange}
          placeholder="Shout it out!"
          type="text"
          value={this.state.msg}        
        />

        <button type="submit">+ Add Shout</button>
      </form>
    );
  }
}

export default CreateShoutForm;