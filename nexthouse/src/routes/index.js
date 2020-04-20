import React from "react";
import { Loader } from "react-overlay-loader";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import RouterBackground from "../containers/RouterBackground";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Login = React.lazy(() => import("../pages/Login"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const Routes = (props) => {
  <Router>
    <RouterBackground {...props}>
      <React.Suspense fallback={<Loader loading fullPage text="" />}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </RouterBackground>
  </Router>;
};

export default Routes;
