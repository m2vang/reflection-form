import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelView extends Component {
    render() {
        return(
            <div>Feel</div>
        ) //end of return
    } //end of render
} //end of FeelView class

export default connect()(FeelView);