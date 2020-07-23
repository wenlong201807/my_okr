import React from 'react';
// import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';
import {observer} from 'mobx-react';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import Login from './views/Login';
import Empty from './views/Empty';
import Home from './views/Home';
import PersonReasonOKRExame from './components/PersonReasonOKRExame';
import PersonYearKRDetail from './components/PersonYearKRDetail';
import TeamYearKRDetail from './components/TeamYearKRDetail';

export default observer(function App() {
    return (
        <HashRouter>
            <Route exact path="/">
                {
                < Redirect to = "/login" />
            } </Route>
            <Route path="/login"
                component={Login}/>
            <Route path="/home"
                component={Home}/>
            <Route path="/PersonReasonOKRExame/:type"
                component={PersonReasonOKRExame}/>
            <Route path="/PersonYearKRDetail"
                component={PersonYearKRDetail}/>
            <Route path="/TeamYearKRDetail"
                component={TeamYearKRDetail}/>
            <Route path="/404"
                component={Empty}/>
        </HashRouter>

    );
});
