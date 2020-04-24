import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Modal from '../../components/Modal';

export const Success = ({ show, user, onClose }) => {
  const handleFinish = () => onClose();

  return (
    <Modal className="edit-modal" show={show} title="Usuário editado!">
      <div className="row">
        <span>
          O usuário
          <b> {user?.fullName} </b>
          foi alterado com sucesso.
        </span>
      </div>
      <div className="row buttons">
        <button type="button" className="btn primary" onClick={handleFinish}>
          finalizar
        </button>
      </div>
    </Modal>
  );
};

Success.propTypes = {
  show: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.object]),
  onClose: PropTypes.func.isRequired,
};

Success.defaultProps = {
  user: {},
};

export default withRouter(Success);
