import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import {updateStepTwo} from '../../ducks/reducer'

class Step2 extends Component {
    constructor() {
        super()
        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        const {img} = this.props
        this.setState({
            img
        })
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    render() {
        return (
            <div id='step-two'>
                <h3>Image URL</h3>
                <input value={this.state.img} onChange={e => this.handleChange('img', e)} />
                <Link to='/wizard/step3'><button id='next-button' onClick={() => this.props.updateStepTwo(this.state.img)}>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, {updateStepTwo})(Step2);