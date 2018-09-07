import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class CommentView extends Component {
    render() {
        return (
            <div>
                <Header />
                Comment
            </div>
        ) //end of return
    } //end of render
} //end of CommentView class

export default connect()(CommentView);