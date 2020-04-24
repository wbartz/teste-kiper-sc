import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../components/Modal';

const SuccessComponent = ({ show, onClose }) => {
  const handleFinish = () => onClose();

  return (
    <Modal className="edit-modal" show={show} title="Pronto!">
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

SuccessComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessComponent;
