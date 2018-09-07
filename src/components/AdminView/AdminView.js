import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminHeader from '../Header/AdminHeader/AdminHeader.js';

class AdminView extends Component {
    render() {
        return (
            <div>
                <AdminHeader />
                Admin
            </div>
        ) //end of return
    } //end of render
} //end of AdminView class

export default connect()(AdminView);