import React, { useContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../containers/StoreProvider';
import Table from '../../components/Table';
import ConfirmRemove from './confirmRemove';
import './index.scss';

const Residents = ({
  removeResident,
  getResidents,
  location,
  residents,
  history,
}) => {
  const [hasData, setData] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentResident, setCurrentResident] = useState(null);
  const getData = useCallback(async () => {
    const { apartment_id } = location.state;
    await getResidents(apartment_id);
  }, [getResidents, location.state]);

  useEffect(() => {
    if (!hasData) {
      getData();
      setData(true);
    }
  }, [location, getData, hasData]);

  const handleAdd = () =>
    history.push(`${location.pathname}/novo-morador`, {
      apartment_id: location.state.apartment_id,
    });

  const handleEdit = (id) =>
    history.push(`${location.pathname}/editar-morador`, {
      apartment_id: location.state.apartment_id,
      resident_id: id,
    });
  const handleDelete = () => {
    removeResident(currentResident, getData);
    setCurrentResident(null);
    setShowConfirm(false);
  };
  const handleConfirm = (id) => {
    setCurrentResident(id);
    setShowConfirm(true);
  };

  return (
    <div className="page">
      <div className="apartment-page">
        <div className="right">
          <button type="button" className="btn primary" onClick={handleAdd}>
            <i className="material-icons right">add</i>Adicionar
          </button>
        </div>
        <Table
          header={[
            'Responsável',
            'Nome',
            'CPF',
            'Data Nasc',
            'E-mail',
            'Telefone',
          ]}
          lines={residents}
          onEdit={handleEdit}
          onRemove={handleConfirm}
        />
      </div>

      <ConfirmRemove
        show={showConfirm}
        onClose={() => {
          setCurrentResident(null);
          setShowConfirm(false);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
};

Residents.propTypes = {
  getResidents: PropTypes.func.isRequired,
  removeResident: PropTypes.func.isRequired,
  residents: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

Residents.defaultProps = {
  residents: [],
};

export default (props) => <Residents {...useContext(AppContext)} {...props} />;
