import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogged } from '../helpers';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogged() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

PrivateRoute.defaultProps = {
  component: null,
  location: {},
};

export default PrivateRoute;
