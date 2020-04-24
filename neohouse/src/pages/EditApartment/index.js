import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../containers/StoreProvider';
import { formatCpf, formatPhone } from '../../helpers';
import { withRouter } from 'react-router-dom';
import Form from './form';
import validations from './validations';
import Success from './success';

const EditApartment = ({ history, match, location, getResident }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasData, setHasData] = useState(false);
  const { handleSubmit, control, errors, setValue } = useForm({
    validations,
  });

  const setUserValues = (info) => {
    return Object.keys(info).map((key) => {
      let value = info[key];
      if (key === 'cpf') {
        value = formatCpf(info[key]);
      } else if (key === 'phone') {
        value = formatPhone(info[key]);
      }
      setUser({ ...info, id: match.params.id });
      return setValue(key, value);
    });
  };

  const getData = useCallback(async (id) => {
    await getResident(id);
  });

  useEffect(() => {
    if (!hasData) {
      const { resident_id } = location.state;
      getData(resident_id);
      setHasData(true);
    }
  }, [hasData, getData, location]);

  const onSuccess = () => {
    setShowSuccess(true);
  };

  const handleAdd = (values) => {
    addResident(values, onSuccess);
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit(handleAdd)}>
        <Form user={user} errors={errors} control={control} />
        <button
          type="submit"
          className="btn btn-submit"
          disabled={errors.length}
        >
          Salvar
        </button>
      </form>

      <Success
        show={showSuccess}
        user={user}
        onClose={() => {
          setShowSuccess(false);
        }}
      />
    </div>
  );
};

EditApartment.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  match: PropTypes.shape({
    params: PropTypes.oneOfType([PropTypes.object]),
  }).isRequired,
};

export default withRouter((props) => (
  <EditApartment {...useContext(AppContext)} {...props} />
));
