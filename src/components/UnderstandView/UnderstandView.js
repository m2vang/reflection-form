import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class UnderstandView extends Component {
    constructor() {
        super();
        this.state = {
            understanding: '',
        }
    } //end of constructor

    handleUnderstandChange = (event) => {
        this.setState({
            understanding: Number(event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_UNDERSTANDING', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push("/3"); //move on to next page
    } //end of handleSubmit

    render() {
        return (
            <div>
                <Header />
                <div className="inputForm">
                    <h2>Question 2 of 4:</h2>
                    <h3>How well did you understand the material today on a scale of 1-5 with 5 being the highest?</h3>
                    <input type="number" onChange={this.handleUnderstandChange} name="understanding" />
                </div>
                <div>
                    <button className="nextPage" onClick={this.handleSubmit}>Next</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of UnderstandView class

export default connect()(UnderstandView);