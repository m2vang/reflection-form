import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>
                    <span id="title">
                        Feedback for today!
                    </span>
                </h1>
                <img src="images/goat_small.jpg" alt="goat" width="100px" height="100px"/>
            </header>
        ); //end of return
    } //end of render
} //end of Header class

export default connect()(Header);