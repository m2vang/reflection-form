import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class CommentView extends Component {

    nextPage = () => {
        this.props.history.push("/5");
    } //end of next Page

    render() {
        return (
            <div>
                <Header />
                Comment
                <div>
                    <button className="next-page" onClick={this.nextPage}>Next</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of CommentView class

export default connect()(CommentView);