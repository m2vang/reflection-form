import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminHeader extends Component {
    render() {
        return (
            <header>
                <h1>
                    <span id="title">
                        Feedback Results!
                    </span>
                </h1>
                <img src="images/goat_small.jpg" alt="goat" width="100px" height="100px" />
            </header>
        ); //end of return
    } //end of render
} //end of Header class

export default connect()(AdminHeader);