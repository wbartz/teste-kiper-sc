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
    const { block } = location.state;
    await getApartments(block);
    setData(true);
  }, [getApartments, location.state]);

  useEffect(() => {
    if (!hasData) {
      getData();
    }
  }, [location, getData, hasData]);

  const handleView = (id) =>
    history.push(`${location.pathname}/moradores/apartamento-${id}`, {
      block: location.state.block,
      id,
    });
  const handleEdit = (id) =>
    history.push(`${location.pathname}/edit/apartamento-${id}`, {
      block: location.state.block,
      id,
    });
  const handleDelete = (id) => removeApartment(id, getData);

  return (
    <div className="page">
      <div className="apartment-page">
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
