import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './index.scss';
import UserMenu from '../UserMenu';

export const NavbarComponent = ({ history }) => {
  const goToHome = () => {
    history.push('/');
  };

  return (
    <nav className="neohouse-nav">
      <div className="nav-wrapper">
        <button
          type="button"
          onClick={() => goToHome()}
          className="brand-logo btn-link"
        >
          <img src={Logo} alt="NeoHouse" />
        </button>
        <UserMenu anchor onLogout={goToHome} />
      </div>
    </nav>
  );
};

NavbarComponent.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter(NavbarComponent);
