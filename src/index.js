import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const blankFeedbacks = {
    feedbacks: {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    }
}

const feedbackReducer = (state = blankFeedbacks, action) => {
    if (action.type === 'ADD_FEELINGS') {
        const newFeeling = { ...state, feeling: action.payload};
        return newFeeling;
    } else if (action.type === 'ADD_UNDERSTANDING') {
        const newUnderstanding = { ...state, understanding: action.payload };
        return newUnderstanding;
    } else if (action.type === 'ADD_SUPPORT') {
        const newSupport = { ...state, support: action.payload };
        return newSupport;
    } else if (action.type === 'ADD_COMMENT') {
        const newComment = { ...state, comment: action.payload };
        return newComment;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return blankFeedbacks;
    }
    return state;
}; //end of feedbackReducer

const feedbackHistoryReducer = (state = [], action) => {
    if(action.type === 'GET_HISTORY') {
        const feedbackHistoryFromServer = action.payload;
        return feedbackHistoryFromServer;
    }
    return state;
}; //end of feedbackHistoryReducer

const storeInstance = createStore(
    //combineReducers will allow more than one reducer
    combineReducers({
        feedbackReducer,
        feedbackHistoryReducer
    }),
    applyMiddleware(logger),
); //end of storeInstance

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
