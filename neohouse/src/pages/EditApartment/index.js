import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../containers/StoreProvider';
import { withRouter } from 'react-router-dom';
import Form from './form';
import * as yup from 'yup';
import Success from './success';
import M from 'materialize-css';
import './index.scss';

const validationSchema = yup.object().shape({
  number: yup.number().required('Este campo é obrigatório'),
});

const FormEditApartment = ({
  history,
  location,
  editApartment,
  getApartment,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasData, setData] = useState(false);
  const { handleSubmit, control, errors, setValue } = useForm({
    validationSchema,
  });
  const { apartment_id, block_id } = location.state;

  const setValues = (info) => {
    return Object.keys(info).map((key) => {
      let value = info[key];
      setValue(key, value.toString());
      M.updateTextFields();
      return;
    });
  };

  const getDate = useCallback(async () => {
    await getApartment(apartment_id, setValues);
  }, [getApartment]);

  useEffect(() => {
    if (!hasData) {
      getDate();
      setData(true);
    }
  }, [location, getDate, hasData]);

  const onSuccess = () => {
    setShowSuccess(true);
  };

  const handleAdd = (values) => {
    editApartment(apartment_id, { ...values, block_id }, onSuccess);
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
          history.push(
            `${location.pathname.replace('/editar-apartamento', '')}`,
            {
              block_id: location.state.block_id,
            }
          );
        }}
      />
    </div>
  );
};

FormEditApartment.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  editApartment: PropTypes.func.isRequired,
  getApartment: PropTypes.func.isRequired,
};

export default withRouter((props) => (
  <FormEditApartment {...useContext(AppContext)} {...props} />
));
