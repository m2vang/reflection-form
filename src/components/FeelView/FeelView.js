import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class FeelView extends Component {
    render() {
        return(
            <div>
                <Header />
                Feel
            </div>
        ) //end of return
    } //end of render
} //end of FeelView class

export default connect()(FeelView);