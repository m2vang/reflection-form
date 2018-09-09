import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = [], action) => {
    console.log('reducer');
    return state;
}; //end of feelingReducer

const understandReducer = (state = [], action) => {
    console.log('understandReducer');
    return state;
}; //end of understandReducer

const supportReducer = (state = [], action) => {
    console.log('supportReducer');
    return state;
}; //end of supportReducer

const commentReducer = (state = [], action) => {
    console.log('commentReducer');
    return state;
}; //end of commentReducer

const feedbackHistoryReducer = (state = [], action) => {
    console.log('feedbackHistoryReducer HIT');
    if(action.type === 'GET_HISTORY') {
        const feedbackHistoryFromServer = action.payload;
        return feedbackHistoryFromServer;
    }
    return state;
}; //end of feedbackHistoryReducer

const storeInstance = createStore(
    //combineReducers will allow more than one reducer
    combineReducers({
        feelingReducer,
        understandReducer,
        supportReducer,
        commentReducer,
        feedbackHistoryReducer
    }),
    applyMiddleware(logger),
); //end of storeInstance

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
