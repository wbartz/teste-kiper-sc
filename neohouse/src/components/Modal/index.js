import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

const Modal = ({ title, className, children, show }) => {
  return (
    <>
      <div className={`custom-modal modal-overlay ${show ? 'active' : ''}`} />
      <div className={`modal custom-modal ${className}`}>
        <div className="modal-content">
          <h4>{title}</h4>
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool,
  className: PropTypes.string,
};

Modal.defaultProps = {
  title: 'Ops!',
  children: null,
  show: true,
  className: '',
};

export default Modal;
