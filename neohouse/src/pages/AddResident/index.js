import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../containers/StoreProvider';
import { withRouter } from 'react-router-dom';
import Form from './form';
import validations from './validations';
import Success from './success';

const FormAddApartment = ({ history, location, addApartment }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [user, setUser] = useState({});
  const { handleSubmit, control, errors } = useForm({
    validations,
  });
  const { apartment_id } = location.state;

  const onSuccess = (values) => {
    setShowSuccess(true);
    setUser(values);
  };

  const handleAdd = (values) => {
    addApartment({ ...values, apartment_id }, onSuccess);
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit(handleAdd)}>
        <Form user={user} errors={errors} control={control} />
        <button
          type="submit"
          className="btn btn-submit primary"
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

FormAddApartment.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  addApartment: PropTypes.func.isRequired,
};

export default withRouter((props) => (
  <FormAddApartment {...useContext(AppContext)} {...props} />
));
