import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class FeelView extends Component {

    nextPage = () => {
        this.props.history.push("/2");
    } //end of next Page
    
    render() {
        return(
            <div>
                <Header />
                Feel
                <div>
                    <button className="next-page" onClick={this.nextPage}>Next</button>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of FeelView class

export default connect()(FeelView);