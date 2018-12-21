import React, {Component} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import axios from 'axios';

import {connect} from 'react-redux'
import {forgetValues} from '../../ducks/reducer'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import './Wizard.css'

class Wizard extends Component {
    constructor() {
        super()
        this.state = {

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
        return (
            <div id='wizard'>
                <h1>Add New Listing</h1>
                <Link to='/'><button id='cancel-button' onClick={() => this.props.forgetValues()}>Cancel</button></Link>
                <Switch>
                    <Route path='/wizard/step1' component={Step1} />
                    <Route path='/wizard/step2' component={Step2} />
                    <Route path='/wizard/step3' component={Step3} />
                </Switch>
            </div>
        )
    }
}

export default connect(null, {forgetValues})(Wizard)