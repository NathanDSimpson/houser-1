import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        axios.get('/api/houses')
            .then(res => {
                this.setState({
                    houses: res.data
                })
                console.log(this.state)
            })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
            .then(res => {
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div id="dashboard">
                <h1>Dashboard</h1>
                <Link to='/wizard'><button id="add-button">Add New Property</button></Link>
                <hr></hr>
                <h3>Home Listings</h3>
                {this.state.houses.map(house => (
                    <House 
                        key={house.id} 
                        info={house} 
                        deleteFn={this.deleteHouse}
                    />
                ))}
            </div>
        )
    }
}