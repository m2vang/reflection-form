import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import Button from '@material-ui/core/Button';

class ThankView extends Component {

    restartFeedback = () => {
        this.props.history.push("/");
    } //end of next Page

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h1>Thank You!</h1>
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.restartFeedback}>Leave a new feedback</Button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of ThankView class

export default connect()(ThankView);