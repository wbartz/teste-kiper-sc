import React, { useContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../containers/StoreProvider';
import Table from '../../components/Table';
import './index.scss';

const Residents = ({
  removeResident,
  getResidents,
  location,
  residents,
  history,
}) => {
  const [hasData, setData] = useState(false);
  const getData = useCallback(async () => {
    const { block } = location.state;
    await getResidents(block);
  }, [getResidents, location.state]);
  
  useEffect(() => {
    if (!hasData) {
      getData();
      setData(true);
    }
  }, [location, getData, hasData]);

  const handleView = (id) => history.push(`moradores/${id}`);
  const handleEdit = (id) => history.push(`edit/${id}`);
  const handleDelete = (id) => removeResident(id, getData);

  return (
    <div className="page">
      <div className="apartment-page">
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
          onView={handleView}
          onRemove={handleDelete}
        />
      </div>
    </div>
  );
};

Residents.propTypes = {
  getResidents: PropTypes.func.isRequired,
  removeResident: PropTypes.func.isRequired,
  residents: PropTypes.oneOfType([PropTypes.array]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

Residents.defaultProps = {
  residents: [],
};

export default (props) => <Residents {...useContext(AppContext)} {...props} />;
