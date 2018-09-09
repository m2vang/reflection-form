import React, { Component } from 'react';
import './App.css';
import FeelView from '../FeelView/FeelView.js';
import UnderstandView from '../UnderstandView/UnderstandView.js';
import SupportView from '../SupportView/SupportView.js';
import CommentView from '../CommentView/CommentView.js';
import ThankView from '../ThankView/ThankView.js';
// import AdminView from '../AdminView/AdminView.js';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <br />
          {/* client-side routers */}
          <Route exact path="/" component={FeelView} />
          <Route path="/2" component={UnderstandView} />
          <Route path="/3" component={SupportView} />
          <Route path="/4" component={CommentView} />
          <Route path="/5" component={ThankView} />
          {/* <Route path="/admin" component={AdminView} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
