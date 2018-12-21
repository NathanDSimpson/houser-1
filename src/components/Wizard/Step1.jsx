import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Wizard.css'

import { connect } from 'react-redux'
import { updateStepOne } from '../../ducks/reducer'

class Step1 extends Component {
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

    componentDidMount() {
        const { name, address, city, st, zip } = this.props
        this.setState({
            name: name, address: address, city: city, state: st, zip: zip
        })
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    render() {
        return (
            <div id='step-one'>

                <h3>Property Name</h3>
                <input id='property-name' value={this.state.name} maxLength="30" onChange={e => this.handleChange('name', e)} />
                
                <h3>Address</h3>
                <input id='address' value={this.state.address} maxLength="100" onChange={e => this.handleChange('address', e)} />

                <div>
                    <div>
                        <h3>City</h3>
                        <input id='city' value={this.state.city} maxLength="100" onChange={e => this.handleChange('city', e)} />
                    </div>
                    <div>
                        <h3>State</h3>
                        <input id='state' value={this.state.state} maxLength="2" onChange={e => this.handleChange('state', e)} />
                    </div>
                    <div>
                        <h3>Zipcode</h3>
                        <input id='zipcode' value={this.state.zip} onChange={e => this.handleChange('zip', e)} />
                    </div>
                </div>
                <Link to='/wizard/step2'>
                    <button id='next-button' onClick={() => this.props.updateStepOne(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)} >Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { name, address, city, st, zip } = state
    return {
        name, address, city, st, zip
    }
}

export default connect(mapStateToProps, { updateStepOne })(Step1);