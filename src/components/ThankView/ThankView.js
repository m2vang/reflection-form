import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankView extends Component {
    render() {
        return (
            <div>Thanks</div>
        ) //end of return
    } //end of render
} //end of ThankView class

export default connect()(ThankView);