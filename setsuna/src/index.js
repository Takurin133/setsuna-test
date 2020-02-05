import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Column from './Components/Column/index';
import Feedback from './Components/Feedback/index';
import Match from './Components/Match/index';
import Mypage from './Components/Mypage/index';

ReactDOM.render((
    <div>
        <App />
        <Router>
            <Route exact path="/" component={Mypage}></Route>
            <Route path="/Mypage" component={Mypage}></Route>
            <Route path="/Match" component={Match}></Route>
            <Route path="/Column" component={Column}></Route>
            <Route path="/Feedback" component={Feedback}></Route>
        </Router>
    </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
