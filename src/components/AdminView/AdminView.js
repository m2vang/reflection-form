import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminHeader from '../Header/AdminHeader/AdminHeader.js';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
            const action = { type: 'GET_HISTORY', payload: history }
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

    flagFeedback = (event) => {
        const id = event.target.value;
    }

    render() {
        return (
            <div>
                <AdminHeader />
                <br />
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Feeling</TableCell>
                                    <TableCell>Comprehension</TableCell>
                                    <TableCell>Support</TableCell>
                                    <TableCell>Comments</TableCell>
                                    <TableCell>Flag for Review</TableCell>
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxState.feedbackHistoryReducer.map((feedback, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <TableCell>{feedback.feeling}</TableCell>
                                            <TableCell>{feedback.understanding}</TableCell>
                                            <TableCell>{feedback.support}</TableCell>
                                            <TableCell>{feedback.comments}</TableCell>
                                            <TableCell><Checkbox unchecked={this.flagFeedback} value={feedback.id}></Checkbox></TableCell>
                                            <TableCell><button onClick={this.removeFeedback} value={feedback.id}>Delete</button></TableCell>
                                        </TableRow>
                                    )
                                })}

                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        ) //end of return
    } //end of render
} //end of AdminView class
const mapReduxStateToProps = reduxState => ({ reduxState });
export default connect(mapReduxStateToProps)(AdminView);