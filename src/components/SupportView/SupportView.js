import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SupportView extends Component {
    constructor() {
        super();
        this.state = {
            support: '',
        }
    }

    handleSupportChange = (event) => {
        this.setState({
            support: Number(event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_SUPPORT', payload: this.state.support };
        this.props.dispatch(action);
        this.props.history.push("/4"); //move on to next page
    }

    render() {
        return (
            <div>
                <Header />
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            Question 3 of 4:
                        </Typography>
                        <Typography variant="headline" component="h2">
                            How well did you feel supported on a scale of 1-5 with 5 being the most?
                        </Typography>
                        <Typography color="textSecondary">
                            <input type="number" onChange={this.handleSupportChange} name="support" />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" size="large" className="nextPage" onClick={this.handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </div>
        ) //end of return
    } //end of render
} //end of SupportView class

export default connect()(SupportView);