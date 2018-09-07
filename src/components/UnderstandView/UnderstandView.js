import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandView extends Component {
    render() {
        return (
            <div>Understand</div>
        ) //end of return
    } //end of render
} //end of UnderstandView class

export default connect()(UnderstandView);