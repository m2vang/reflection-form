import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class SupportView extends Component {
    render() {
        return (
            <div>
                <Header />
                Support
            </div>
        ) //end of return
    } //end of render
} //end of SupportView class

export default connect()(SupportView);