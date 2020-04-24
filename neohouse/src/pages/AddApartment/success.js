import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Modal from '../../components/Modal';

export const Success = ({ show, onClose }) => {
  const handleFinish = () => onClose();

  return (
    <Modal className="edit-modal" show={show} title="Apartamento cadastrado!">
      <div className="row">
        <span>
          O Apartamento foi cadastrado com sucesso!
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
  onClose: PropTypes.func.isRequired,
};

export default withRouter(Success);
