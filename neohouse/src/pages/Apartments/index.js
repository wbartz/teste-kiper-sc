import React, { useContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../containers/StoreProvider';
import Table from '../../components/Table';
import './index.scss';

const Apartments = ({
  removeApartment,
  getApartments,
  location,
  apartments,
  history,
}) => {
  const [hasData, setData] = useState(false);
  const getData = useCallback(async () => {
    const { block_id } = location.state;
    await getApartments(block_id);
  }, [getApartments, location.state]);

  useEffect(() => {
    if (!hasData) {
      getData();
      setData(true)
    }
  }, [location, getData, hasData]);

  const handleView = (id) =>
    history.push(`${location.pathname}/moradores/apartamento-${id}`, {
      block_id: location.state.block_id,
      id,
    });
  const handleEdit = (id) =>
    history.push(`${location.pathname}/edit/apartamento-${id}`, {
      block_id: location.state.block_id,
      id,
    });
  const handleAdd = () =>
    history.push(`${location.pathname}/novo-apartamento`, {
      block_id: location.state.block_id,
    });
  const handleDelete = (id) => removeApartment(id, getData);

  return (
    <div className="page">
      <div className="apartment-page">
        <div className="right">
          <button type="button" className="btn primary" onClick={handleAdd}>
            <i className="material-icons right">add</i>Adicionar
          </button>
        </div>
        <Table
          header={['Número Apt.', 'Responsável', 'E-mail', 'Telefone']}
          lines={apartments}
          onEdit={handleEdit}
          onView={handleView}
          onRemove={handleDelete}
        />
      </div>
    </div>
  );
};

Apartments.propTypes = {
  getApartments: PropTypes.func.isRequired,
  removeApartment: PropTypes.func.isRequired,
  apartments: PropTypes.oneOfType([PropTypes.array]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

Apartments.defaultProps = {
  apartments: [],
};

export default (props) => <Apartments {...useContext(AppContext)} {...props} />;
