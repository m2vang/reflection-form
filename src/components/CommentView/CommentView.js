import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import axios from 'axios';

class CommentView extends Component {
    constructor() {
        super();
        this.state = {
            comment: '',
        }
    } //end of constructor

    handleCommentChange = (event) => {
        this.setState({
            comment: (event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_COMMENT', payload: this.state.comment };
        this.props.dispatch(action);
        this.postFeedback();
    } //end of handleSubmit

    postFeedback = () => {
        const feedback = this.props.reduxState.feedbackReducer;
        axios({
            method: 'POST',
            url: '/addHistory',
            data: feedback
        }).then((response) => {
            const action = { type: 'CLEAR_FEEDBACK' };
            this.props.dispatch(action);
            this.props.history.push("/5"); //move on to next page
        }).catch((error) => {
            alert('Unable to send feedback!');
            console.log('error in POST', error);
        });
    } //end of postFeedback

    render() {
        return (
            <div>
                <Header />
                <div className="inputForm">
                    <h2>Question 4 of 4:</h2>
                    <h3>Any comments?</h3>
                    <input type="string" onChange={this.handleCommentChange} name="comment"/>
                </div>
                <div>
                    <button className="nextPage" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of CommentView class
const mapReduxStateToProps = reduxState => ({ reduxState });
export default connect(mapReduxStateToProps)(CommentView);