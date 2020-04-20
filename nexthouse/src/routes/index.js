import React from 'react';
import { Loader } from 'react-overlay-loader';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import RouterBackground from '../containers/RouterBackground';
import AuthProvider from '../containers/AuthProvider';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const Routes = (props) => (
  <Router>
    <AuthProvider {...props}>
      <RouterBackground {...props}>
        <React.Suspense fallback={<Loader loading fullPage text="" />}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </RouterBackground>
    </AuthProvider>
  </Router>
);

export default Routes;
