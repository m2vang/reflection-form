import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class ThankView extends Component {
    render() {
        return (
            <div>
                <Header />
                Thanks
            </div>
        ) //end of return
    } //end of render
} //end of ThankView class

export default connect()(ThankView);