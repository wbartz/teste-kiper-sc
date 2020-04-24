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
const Apartments = React.lazy(() => import('../pages/Apartments'));
const Residents = React.lazy(() => import('../pages/Residents'));
const AddApartment = React.lazy(() => import('../pages/AddApartment'));
const AddResident = React.lazy(() => import('../pages/AddResident'));

const Routes = (props) => (
  <Router>
    <RouterBackground {...props}>
      <React.Suspense fallback={<Loader loading fullPage text="" />}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/apartamentos/:block" component={Apartments} />
          <PrivateRoute exact path="/apartamentos/:block/novo-apartamento" component={AddApartment} />
          <PrivateRoute exact path="/apartamentos/:block/moradores/:apartment" component={Residents} />
          <PrivateRoute exact path="/apartamentos/:block/moradores/:apartment/novo-morador" component={AddResident} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </RouterBackground>
  </Router>
);

export default Routes;
