import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class FeelView extends Component {
    constructor() {
        super();
        this.state = {
            feelings: '',
        }
    } //end of constructor

    handleFeelingChange = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action ={type: 'ADD_FEELINGS', payload: this.state.feeling};
        this.props.dispatch(action);
        this.props.history.push("/2"); //move on to next page
    } //end of handleSubmit

    render() {
        return(
            <div>
                <Header />
                <div className="inputForm">
                    <h2>Question 1 of 4:</h2>
                    <h3>How are you feeling today on a scale of 1-5 with 5 being the best?</h3>
                    <input type="number" onChange={this.handleFeelingChange} name="feelings"/>
                </div>
                <div>
                    <button className="nextPage" onClick={this.handleSubmit}>Next</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of FeelView class

export default connect()(FeelView);