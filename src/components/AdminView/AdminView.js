import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminHeader from '../Header/AdminHeader/AdminHeader.js';
import axios from 'axios';

class AdminView extends Component {

    componentDidMount() {
        this.getFeedbackHistory();
    } //end of componentDidMOunt

    getFeedbackHistory = () => {
        axios({
            method: 'GET',
            url: '/'
        }).then((response) => {
            const history = response.data;
            const action = {type: 'GET_HISTORY', payload: history}
            this.props.dispatch(action);
            // console.log('Historydata:', response.data);
        }).catch((error) => {
            alert('Unable to get feedback history!');
            console.log('Error in Get History!', error);
        }); //end of GET
    } //end of getFeedbackHistory

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
                            {this.props.reduxState.feedbackHistoryReducer.map((feedback, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{feedback.feedling}</td>
                                        <td>{feedback.understanding}</td>
                                        <td>{feedback.support}</td>
                                        <td>{feedback.comments}</td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of AdminView class
const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(AdminView);