import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Table from '../../components/Table';
import TextField from '../../components/TextField';
import { AppContext } from '../../containers/StoreProvider';
import { onlyNumbers } from '../../helpers';
import ConfirmRemove from './confirmRemove';
import './index.scss';

const Apartments = ({
  removeApartment,
  getApartments,
  location,
  apartments,
  history,
}) => {
  const [hasData, setData] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentApartment, setCurrentApartment] = useState(null);
  const [number, setNumber] = useState('');
  const getData = useCallback(async () => {
    const { block_id } = location.state;
    await getApartments(block_id, number.length > 0 ? number : null);
  }, [getApartments, location.state, number]);

  useEffect(() => {
    if (!hasData) {
      getData();
      setData(true);
    }
  }, [location, getData, hasData]);

  const handleView = ({ id }) =>
    history.push(`${location.pathname}/apartamento-${id}/moradores`, {
      block_id: location.state.block_id,
      apartment_id: id,
    });

  const handleEdit = ({ id }) =>
    history.push(`${location.pathname}/editar-apartamento`, {
      block_id: location.state.block_id,
      apartment_id: id,
    });

  const handleAdd = () =>
    history.push(`${location.pathname}/novo-apartamento`, {
      block_id: location.state.block_id,
    });

  const handleDelete = () => {
    removeApartment(currentApartment, getData);
    setCurrentApartment(null);
    setShowConfirm(false);
  };

  const handleConfirm = ({ id }) => {
    setCurrentApartment(id);
    setShowConfirm(true);
  };

  const handleSearch = () => {
    if (number.length > 0) {
      getData();
    }
  };

  return (
    <div className="page apartment">
      <div className="apartment-page">
        <div className="right">
          <button type="button" className="btn primary" onClick={handleAdd}>
            <i className="material-icons right">add</i>Adicionar
          </button>
        </div>
        <div className="search-field">
          <div className="row">
            <div className="col m6">
              <div className="col m4">
                <TextField
                  size="sm"
                  name="search"
                  label="Buscar apartamento"
                  value={number}
                  onChange={setNumber}
                  format={onlyNumbers}
                />
              </div>
              <div className="col md2">
                <button
                  className="btn primary"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="material-icons">search</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Table
          header={['Número Apt.', 'Responsável', 'E-mail', 'Telefone']}
          lines={apartments}
          onEdit={handleEdit}
          onView={handleView}
          onRemove={handleConfirm}
        />
      </div>

      <ConfirmRemove
        show={showConfirm}
        onClose={() => {
          setCurrentApartment(null);
          setShowConfirm(false);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
};

Apartments.propTypes = {
  getApartments: PropTypes.func.isRequired,
  removeApartment: PropTypes.func.isRequired,
  apartments: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

Apartments.defaultProps = {
  apartments: [],
};

export default (props) => <Apartments {...useContext(AppContext)} {...props} />;
