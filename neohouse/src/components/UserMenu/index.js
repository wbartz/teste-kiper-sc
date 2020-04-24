import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { getCookie } from '../../helpers';
import { Menu, MenuItem } from '../Menu';
import './index.scss';
import { AppContext } from '../../containers/StoreProvider';

export const UserMenuComponent = ({ onLogout, signOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignOut = async () => {
    await signOut(onLogout);
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await getCookie('user');
      setUser(JSON.parse(user));
    };

    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <>
      <Menu anchor active={isOpen} onChange={() => setIsOpen(false)}>
        <MenuItem active>{user?.full_name}</MenuItem>

        <MenuItem onClick={handleSignOut} icon="logout" className="user-logout">
          Sair
        </MenuItem>
      </Menu>

      <ul className={`nav-user-btn right ${isOpen ? 'active' : ''}`}>
        <li>
          <button
            type="button"
            className="nav-user-open btn-link"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="icon-user material-icons">account_circle</i>
            <i className="icon-arrow-down material-icons">
              keyboard_arrow_down
            </i>
            <i className="icon-arrow-up material-icons">keyboard_arrow_up</i>
          </button>
        </li>
      </ul>
    </>
  );
};

UserMenuComponent.propTypes = {
  onLogout: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default props => <UserMenuComponent {...useContext(AppContext)} {...props} />;
