import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './hoc/auth'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Auth(Login, true)} />
            <Route path="/dashboard" exact component={Auth(Dashboard, true)} />
        </Switch>
    );
};

export default Routes;