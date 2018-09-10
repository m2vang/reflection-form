import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class UnderstandView extends Component {
    constructor() {
        super();
        this.state = {
            understanding: '',
        }
    } //end of constructor

    handleUnderstandChange = (event) => {
        this.setState({
            understanding: Number(event.target.value),
        })
    } //end handleFeelingChange

    handleSubmit = () => {
        const action = { type: 'ADD_UNDERSTANDING', payload: this.state.understanding };
        this.props.dispatch(action);
        this.props.history.push("/3"); //move on to next page
    } //end of handleSubmit

    render() {
        return (
            <div>
                <Header />
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            Question 2 of 4:
                        </Typography>
                        <Typography variant="headline" component="h2">
                            How well did you understand the material today on a scale of 1-5 with 5 being the highest?
                        </Typography>
                        <Typography color="textSecondary">
                            <input type="number" onChange={this.handleUnderstandChange} name="understanding" />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" className="nextPage" onClick={this.handleSubmit}>Next</Button>
                    </CardActions>
                </Card>
            </div>
        ) //end of return
    } //end of render
} //end of UnderstandView class

export default connect()(UnderstandView);