import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import './index.scss';
import { LOG } from '../../helpers';

const Menu = ({ children, active, onChange }) => {
  const handleClickOutside = useCallback(
    (event) => {
      LOG(event.srcElement.className)
      if (
        !event.srcElement.className.includes('mdc-button') &&
        !event.srcElement.className.includes('icon-user')
      ) {
        onChange();
      }
    },
    [onChange]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <ul className={`dropdown-content ${active ? 'active' : ''} nav-user-menu`}>
      {children}
    </ul>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  onChange: PropTypes.func,
};

Menu.defaultProps = {
  children: '',
  active: true,
  onChange: () => {},
};

export default Menu;
