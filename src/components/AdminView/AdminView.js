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
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
        const id = this.feedback.id;
        axios({
            method: 'DELETE',
            url: '/feedback/' + id
        }).then((response) => {
            this.getFeedbackHistory();
        }).catch((error) => {
            alert('Unable to delete feedback!');
            console.log('Error in remove', error);
        })
    } //end of removeFeedback

    toggleFlagFeedback = (feedback) => {
        console.log('flag', feedback);
        axios({
            method: 'PUT',
            url: '/feedback/flag' + feedback
        }).then((response) => {
            //this.getFeedbackHistory();
        }).catch((error) => {
            alert('Unable to flag feedback!');
            console.log('error in POST-flag', error);
        });
    } //end of flagFeedback

    render() {
        let{showModal, onConfirm, hideModal, feedback} = this.props
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
                                    <TableCell>Remove</TableCell>
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
                                            <TableCell><Checkbox checked={feedback.flagged} onChange={this.toggleFlagFeedback(feedback)}></Checkbox></TableCell>
                                            {/* <TableCell><Button variant="contained" color="secondary" onClick={this.removeFeedback}>Delete<DeleteIcon /></Button></TableCell> */}
                                            <TableCell><Button onClick={() => showModal("Are you sure you want to delete this?")}></Button> 
                                                <ConfirmModal message =" ``" onConfirm={onConfirm} onCancel={hideModal}></ConfirmModal></TableCell>
                                        </TableRow>
                                    ) //end of return
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