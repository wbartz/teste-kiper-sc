import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Loader } from 'react-overlay-loader';
import { AppContext } from '../../containers/StoreProvider';

const Loading = ({ isLoading }) => {
  return <Loader loading={isLoading} fullPage text="" />;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default props => <Loading {...useContext(AppContext)} {...props} />;
