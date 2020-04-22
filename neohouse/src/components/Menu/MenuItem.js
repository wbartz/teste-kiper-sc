import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

const MenuItem = ({ children, icon, onClick, className }) => {
  return (
    <li className={`mdc-list-item ${className}`}>
      <button
        type="button"
        onClick={onClick}
        className={`mdc-button ${onClick ? 'link' : 'text'} btn-link`}
      >
        {icon && <i className="material-icons">{icon}</i>}
        {children}
      </button>
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  className: PropTypes.string,
};

MenuItem.defaultProps = {
  children: '',
  onClick: undefined,
  icon: '',
  className: '',
};

export default MenuItem;
