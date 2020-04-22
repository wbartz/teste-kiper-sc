import React from 'react';
import { Loader } from 'react-overlay-loader';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import RouterBackground from '../containers/RouterBackground';
import PrivateRoute from './PrivateRoute';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Login = React.lazy(() => import('../pages/Login'));

const Routes = (props) => (
  <Router>
    <RouterBackground {...props}>
      <React.Suspense fallback={<Loader loading fullPage text="" />}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </RouterBackground>
  </Router>
);

export default Routes;
