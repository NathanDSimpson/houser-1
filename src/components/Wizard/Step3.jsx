import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Wizard.css'

import { connect } from 'react-redux'
import { updateStepThree } from '../../ducks/reducer'
import { forgetValues } from '../../ducks/reducer'

class Step3 extends Component {
    constructor() {
        super()
        this.state = {
            mortgage: 0.00,
            rent: 0.00,
            recommendedRent: 0.00
        }
    }

    componentDidMount() {
        const { mortgage, rent } = this.props
        this.setState({
            mortgage, rent
        })
    }

    addHouse() {
        console.log(this.props)
        const { mortgage, rent } = this.state
        axios.post('/api/new-house', { ...this.props, mortgage, rent })
            .then(res => (
                this.props.forgetValues()
            ))
    }

    changeRecommendedRent(e) {
        this.setState({
            recommendedRent: e.target.value * (1.25),
            mortgage: e.target.value
        })
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    render() {
        return (
            <div id='step-three'>
                <h4>Recommended Rent: ${this.state.recommendedRent}</h4>
                <h3>Monthly Mortgage Amount</h3>
                <input type='number' placeholder='Mortgage amount' value={this.state.mortgage} onChange={e => this.changeRecommendedRent(e)} />
                <h3>Desired Monthly Rent</h3>
                <input type='number' placeholder='Rent amount' value={this.state.rent} onChange={e => this.handleChange('rent', e)} />

                <Link to='/'><button id='complete-button' onClick={() => {
                    this.props.updateStepThree(this.state.mortgage, this.state.rent)
                    this.addHouse()
                }}>Complete</button></Link>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { updateStepThree, forgetValues })(Step3);