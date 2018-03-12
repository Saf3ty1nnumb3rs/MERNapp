import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



class ConsView extends Component {
    // STATE ----------------------->
    state= {
        cons: [],
        
    }


    // WILL MOUNT --------------------->
    componentWillMount() {
        this.getAllCons()
    }

    // FUNCTIONS ------------------------>
    getAllCons = async () => {
        const res = await axios.get('/cons')
        console.log(res.data)
        this.setState({cons: res.data})
    }

    render() {
        return (
            <div>
               <h1>Cons yo!!!!!!!!!</h1> 
               {this.state.cons.map(con => {
                   return(
                   <Link key={con._id} to={`/cons/${con._id}`}>
                   <h3>{con.name}</h3>
                   </Link>
                   )
               })}
            </div>
        );
    }
}

export default ConsView;