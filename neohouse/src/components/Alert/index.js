import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { AppContext } from '../../containers/StoreProvider';
import './index.scss';

export const AlertComponent = ({ title, message, error, clearErrors }) => {
  const handleClick = useCallback(() => {
    clearErrors();
  }, [clearErrors]);

  return (
    <>
      <div className={`modal-overlay ${error ? 'active' : ''}`} />
      <div className="modal">
        <div className="modal-content">
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button
            className="waves-effect waves-light btn-small mdc-button"
            onClick={handleClick}
            type="button"
          >
            <span className="mdc-button__label">Fechar</span>
          </button>
        </div>
      </div>
    </>
  );
};

AlertComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  clearErrors: PropTypes.func.isRequired,
  error: PropTypes.string,
};

AlertComponent.defaultProps = {
  title: 'Ops!',
  message:
    'Ocorreu um erro ao tentar realizar a ação. Por favor tente novamente.',
  error: null,
};

export default props => (
  <AlertComponent {...props} {...useContext(AppContext)} />
);
