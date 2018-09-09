import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class SupportView extends Component {

    nextPage = () => {
        this.props.history.push("/4");
    } //end of next Page

    render() {
        return (
            <div>
                <Header />
                Support
                <div>
                    <button className="next-page" onClick={this.nextPage}>Next</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of SupportView class

export default connect()(SupportView);