import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class FeelView extends Component {
    constructor() {
        super();
        this.state = {
            feelings: '',
        }
    } //end of constructor

    handleFeelingChange = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_FEELINGS', payload: this.state.feeling };
        this.props.dispatch(action);
        this.props.history.push("/2"); //move on to next page
    } //end of handleSubmit

    render() {
        return (
            <div>
                <Header />
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            Question 1 of 4:
                        </Typography>
                        <Typography variant="headline" component="h2">
                            How are you feeling today on a scale of 1-5 with 5 being the best?
                        </Typography>
                        <Typography color="textSecondary">
                            <input type="number" onChange={this.handleFeelingChange} name="feelings" />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" className="nextPage" onClick={this.handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </div>
        ) //end of return
    } //end of SimpleCard
} //end of FeelView class

export default connect()(FeelView);