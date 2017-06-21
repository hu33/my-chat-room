import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import store from './store/index.jsx';
import MainContainer from './containers/MainContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';

import './style/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={MainContainer} />
            <Route path="/chat" component={MainContainer} />
            <Route path="/login" component={LoginContainer} />
        </Router>
    </Provider>
    , document.getElementById('root'));