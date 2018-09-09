import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class CommentView extends Component {
    constructor() {
        super();
        this.state = {
            comment: '',
        }
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: (event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_COMMENT', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push("/5"); //move on to next page
    }

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

export default connect()(CommentView);