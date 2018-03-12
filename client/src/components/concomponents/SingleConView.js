import React, { Component } from "react";
import axios from "axios";
import ShoutListComponent from './shoutcomponents/ShoutListComponent'

class SingleConView extends Component {
  state = {
    con: {},
    users: [],
    shouts: []
  };

  // WILL MOUNT --------------------->
  componentWillMount() {
    this.getAllUsers();
    this.getAllShouts();

    if (this.props.match.params) {
      const consId = this.props.match.params.id;
      axios.get(`/cons/${consId}`).then(res => {
        const con = {
          _id: res.data._id,
          name: res.data.name,
          theme: res.data.theme,
          location: res.data.location,
          date: res.data.date,
          img: res.data.img
        };

        this.setState({ con: con });
      });
     
    }
  }

  // FUNCTIONS ------------------------>

  getAllUsers = async () => {
    const consId = this.props.match.params.id;
    const res = await axios.get(`/cons/${consId}/users`);
    this.setState({ users: res.data });
  };

  getAllShouts = async () => {
      const consId = this.props.match.params.id
      const res = await axios.get(`/cons/${consId}/shouts`)
      this.setState({ shouts: res.data })
  }

  render() {
    return (
      <div>
        <h1>Hi!</h1>
        <h2>{this.state.con.name}</h2>
        <img src={this.state.con.img} alt={this.state.con.name} />
        <h2>{this.state.con.theme}</h2>
        <h3>{this.state.con.location}</h3>
        <h3>{this.state.con.date}</h3>
        <h4>{this.state.con.user}</h4>
        {this.state.users.map(user => {
          return (
            <div>
              <h3>{user.name}</h3>
              <img src={user.img} alt={user.name} />
              <h4>Since:{user.userSince}</h4>
              <h4>Fav Con:{user.favCon}</h4>
              <h4>About Me:{user.about}</h4>
            </div>
          );
        })}
        {this.state.shouts.map(shout => {
          return (
             
            <div>
            <br />
              <h3>Subj:{shout.subject}</h3>
              <h4>Msg:{shout.msg}</h4>
              <h4>Date:{shout.date}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SingleConView;
