import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentView extends Component {
    render() {
        return (
            <div>Comment</div>
        ) //end of return
    } //end of render
} //end of CommentView class

export default connect()(CommentView);