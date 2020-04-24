import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from './form';
import * as yup from 'yup';
import Success from './success';
import './index.scss';

const validationSchema = yup.object().shape({
  number: yup.number().required('Este campo é obrigatório'),
});

export const FormAddApartment = ({ history, location, addApartment }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { handleSubmit, control, errors } = useForm({
    validationSchema,
  });

  const { block_id } = location.state;

  const onSuccess = () => {
    setShowSuccess(true);
  };

  const handleAdd = (values) => {
    addApartment({ ...values, block_id }, onSuccess);
  };

  return (
    <div className="page add-apartment-page">
      <form onSubmit={handleSubmit(handleAdd)}>
        <Form errors={errors} control={control} />

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
        onClose={() => {
          setShowSuccess(false);
          history.push(`${location.pathname.replace('/novo-apartamento', '')}`, {
            block_id: location.state.block_id,
          });
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

export default FormAddApartment;