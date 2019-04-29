import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage  from '../components/LoginPage';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch> 
            <PublicRoute path="/" exact={true} component={LoginPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;