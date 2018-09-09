import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class UnderstandView extends Component {

    nextPage = () => {
        this.props.history.push("/3");
    } //end of next Page

    render() {
        return (
            <div>
                <Header />
                Understand
                <div>
                    <button className="next-page" onClick={this.nextPage}>Next</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of UnderstandView class

export default connect()(UnderstandView);