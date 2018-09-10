import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CommentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.reduxState.feedbackReducer, comments: 'none'
        }
    } //end of constructor

    handleCommentChange = (event) => {
        this.setState({
            comments: String(event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_COMMENT', payload: this.state.comments };
        this.props.dispatch(action);
        this.postFeedback();
        this.props.history.push("/5"); //move on to next page
    } //end of handleSubmit

    postFeedback = () => {
        const feedback = this.state;
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((response) => {
            const action = { type: 'CLEAR_FEEDBACK' };
            this.props.dispatch(action);
        }).catch((error) => {
            alert('Unable to send feedback!');
            console.log('error in POST', error);
        });
    } //end of postFeedback

    render() {
        return (
            <div>
                <Header />
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            Question 4 of 4:
                        </Typography>
                        <Typography variant="headline" component="h2">
                            Any comments?
                        </Typography>
                        <Typography color="textSecondary">
                            <input type="string" onChange={this.handleCommentChange} name="comment" />                           
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" className="nextPage" onClick={this.handleSubmit}>Submit</Button>
                    </CardActions>
                </Card>
            </div>
        ) //end of return
    } //end of render
} //end of CommentView class
const mapReduxStateToProps = reduxState => ({ reduxState });
export default connect(mapReduxStateToProps)(CommentView);