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
            url: '/feedback'
        }).then((response) => {
            const history = response.data;
            const action = {type: 'GET_HISTORY', payload: history}
            this.props.dispatch(action);
            console.log('Historydata:', history);
        }).catch((error) => {
            alert('Unable to get feedback history!');
            console.log('Error in Get History!', error);
        }); //end of GET
    } //end of getFeedbackHistory

    removeFeedback = (event) => {
        const id = event.target.value;
        axios({
            method: 'DELETE',
            url: '/feedback/' + id
        }).then((response) => {
            this.getFeedbackHistory();
        }).catch((error) => {
            alert('Unable to delete feedback!');
            console.log('Error in remove', error);
        }); //end of DELETE
    } //end of remove

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
                                        <td>{feedback.feeling}</td>
                                        <td>{feedback.understanding}</td>
                                        <td>{feedback.support}</td>
                                        <td>{feedback.comments}</td>
                                        <td><button onClick={this.removeFeedback} value={feedback.id}>Delete</button></td>
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