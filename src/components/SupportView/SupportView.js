import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class SupportView extends Component {
    constructor() {
        super();
        this.state = {
            support: '',
        }
    }

    handleSupportChange = (event) => {
        this.setState({
            support: Number(event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_SUPPORT', payload: this.state.support };
        this.props.dispatch(action);
        this.props.history.push("/4"); //move on to next page
    }

    render() {
        return (
            <div>
                <Header />
                <div className="inputForm">
                    <h2>Question 3 of 4:</h2>
                    <h3>How well did you feel supported on a scale of 1-5 with 5 being the most?</h3>
                    <input type="number" onChange={this.handleSupportChange} name="support"/>
                </div>
                <div>
                    <button className="nextPage" onClick={this.handleSubmit}>Next</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of SupportView class

export default connect()(SupportView);