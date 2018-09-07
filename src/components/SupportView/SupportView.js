import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportView extends Component {
    render() {
        return (
            <div>Support</div>
        ) //end of return
    } //end of render
} //end of SupportView class

export default connect()(SupportView);