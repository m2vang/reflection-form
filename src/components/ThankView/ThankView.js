import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class ThankView extends Component {

    restartFeedback = () => {
        this.props.history.push("/");
    } //end of next Page

    render() {
        return (
            <div>
                <Header />
                <div>
                    Thank you!
                </div>
                <div>
                    <button onClick={this.restartFeedback}>Leave a new feedback</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of ThankView class

export default connect()(ThankView);