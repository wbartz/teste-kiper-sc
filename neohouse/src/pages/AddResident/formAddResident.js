import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from './form';
import validationSchema from './validations';
import Success from './success';
import './index.scss';

const FormResident = ({ history, location, addResident }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [user, setUser] = useState({});
  const { handleSubmit, control, errors } = useForm({
    validationSchema,
  });
  const { apartment_id } = location.state;

  const onSuccess = (values) => {
    setShowSuccess(true);
    setUser(values);
  };

  const handleAdd = (values) => {
    addResident({ ...values, apartment_id }, onSuccess);
  };

  return (
    <div className="page add-resident-page">
      <form onSubmit={handleSubmit(handleAdd)}>
        <Form user={user} errors={errors} control={control} />
        <div className="row buttons">
          <div className="col m8">
            <div className="col m2 lef">
              <button
                type="button"
                className="btn btn-flat"
                disabled={errors.length}
                onClick={() => history.goBack()}
              >
                Cancelar
              </button>
            </div>
            <div className="col m2 right">
              <button
                type="submit"
                className="btn btn-submit primary"
                disabled={errors.length}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
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

FormResident.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  addResident: PropTypes.func.isRequired,
};

export default FormResident;
