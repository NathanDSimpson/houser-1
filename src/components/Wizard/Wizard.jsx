import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';
import './Wizard.css'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    addHouse() {
        axios.post('/api/new-house', this.state)
            .then(res => (
                <Redirect to='/' />
            ))
    }

    render() {
        console.log(this.state)
        return (
            <div id='wizard'>
                <h1>Add New Listing</h1>
                <Link to='/'><button id='cancel-button'>Cancel</button></Link>
                <h3>Property Name</h3>
                <input placeholder='Name' value={this.state.name} onChange={e => this.handleChange('name', e)} />
                <h3>Address</h3>
                <input placeholder='Address' value={this.state.address} onChange={e => this.handleChange('address', e)} />
                <h3>City</h3>
                <input placeholder='City' value={this.state.city} onChange={e => this.handleChange('city', e)} />
                <h3>State</h3>
                <input placeholder='State' value={this.state.state} onChange={e => this.handleChange('state', e)} />
                <h3>Zipcode</h3>
                <input placeholder='Zipcode' value={this.state.zip} onChange={e => this.handleChange('zip', e)} />
                <Link to='/'><button id='complete-button' onClick={() => this.addHouse()}>Complete</button></Link>
            </div>
        )
    }
}