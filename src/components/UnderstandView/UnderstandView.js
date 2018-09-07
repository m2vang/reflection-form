import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class UnderstandView extends Component {
    render() {
        return (
            <div>
                <Header />
                Understand
            </div>
        ) //end of return
    } //end of render
} //end of UnderstandView class

export default connect()(UnderstandView);