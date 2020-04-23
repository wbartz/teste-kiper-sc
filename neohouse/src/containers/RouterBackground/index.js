import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import { AppContext } from '../StoreProvider';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import { Helmet } from 'react-helmet';
import { isLogged } from '../../helpers';
import { withRouter } from 'react-router-dom';

const RouterBackground = ({ children, location }) => {
  let currentPage = location.pathname.split('/')[1].replace('/', '');
  currentPage = currentPage.slice(0, 1).toUpperCase() + currentPage.slice(1);

  return (
    <>
      <Helmet>
        <title>NextHouse - {currentPage}</title>
      </Helmet>

      {isLogged() && <Navbar />}

      <div className="container">
        {isLogged() && <Breadcrumb />}
        {children}
      </div>

      <Loading />
      <Alert />
    </>
  );
};

RouterBackground.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default withRouter((props) => (
  <RouterBackground {...useContext(AppContext)} {...props} />
));
