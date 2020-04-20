import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
// import Logo from '../../assets/images/logo-nossa.svg';
import './index.scss';

export const NavbarComponent = ({ user, history }) => {
  const goToHome = () => {
    history.push('/');
  };

  return (
    <nav className="nossa-adm-nav">
      <div className="nav-wrapper">
        <button
          type="button"
          onClick={() => goToHome()}
          className="brand-logo btn-link"
        ></button>
      </div>
    </nav>
  );
};

NavbarComponent.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]),
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

NavbarComponent.defaultProps = {
  user: {},
};

export default withRouter(NavbarComponent);
