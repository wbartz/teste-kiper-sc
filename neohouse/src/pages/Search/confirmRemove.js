import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Modal from '../../components/Modal';

export const ConfirmRemove = ({ show, onClose, onConfirm }) => {
  return (
    <Modal className="edit-modal" show={show} title="Remover?">
      <div className="row">
        <span>Tem certeza que deseja remover esse morador?</span>
      </div>
      <div className="row buttons">
        <button type="button" className="btn btn-flat" onClick={onClose}>
          Cancelar
        </button>
        <button type="button" className="btn primary" onClick={onConfirm}>
          Remover
        </button>
      </div>
    </Modal>
  );
};

ConfirmRemove.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default withRouter(ConfirmRemove);
