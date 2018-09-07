import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminHeader from '../Header/AdminHeader/AdminHeader.js';

class AdminView extends Component {
    render() {
        return (
            <div>
                <AdminHeader />
                <br />
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Comprehension</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4</td>
                                <td>4</td>
                                <td>4</td>
                                <td>Cool</td>
                                <td><button>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of AdminView class

export default connect()(AdminView);