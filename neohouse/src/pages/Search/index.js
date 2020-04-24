import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Table from '../../components/Table';
import { AppContext } from '../../containers/StoreProvider';
import ConfirmRemove from '../Residents/confirmRemove';
import './index.scss';


const Search = ({
  removeResident,
  searchResidents,
  location,
  residents,
  history,
}) => {
  const [hasData, setData] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentResident, setCurrentResident] = useState(null);
  const { term, field } = location.state;

  const getData = useCallback(async () => {
    await searchResidents(term, field);
  }, [searchResidents, term, field]);

  useEffect(() => {
    if (!hasData) {
      getData();
      setData(true);
    }
  }, [location, getData, hasData]);

  const handleEdit = ({id, name, number}) =>
    history.push(`/apartamentos/${name.replace(' ', '-').toLowerCase()}/apartamento-${number}/moradores/editar-morador`, {
      resident_id: id,
    });

  const handleDelete = () => {
    removeResident(currentResident, getData);
    setCurrentResident(null);
    setShowConfirm(false);
  };

  const handleConfirm = ({id}) => {
    setCurrentResident(id);
    setShowConfirm(true);
  };

  return (
    <div className="page">
      <div className="apartment-page">
        <Table
          header={[
            'Bloco',
            'Apartamento',
            'Nome',
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

Search.propTypes = {
  removeResident: PropTypes.func.isRequired,
  searchResidents: PropTypes.func.isRequired,
  residents: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

Search.defaultProps = {
  residents: [],
};

export default (props) => <Search {...useContext(AppContext)} {...props} />;
