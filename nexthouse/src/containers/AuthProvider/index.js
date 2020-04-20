import PropTypes from 'prop-types';
import React from 'react';
import { isLogged } from '../../helpers';
import Login from '../../pages/Login';

const AuthProvider = ({ children: Component, ...rest }) =>
  isLogged() ? <Component {...rest} /> : <Login {...rest} />;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
}

export default AuthProvider;
