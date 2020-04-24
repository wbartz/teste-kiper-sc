import M from 'materialize-css';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LOG } from '../../helpers';
import Form from './form';
import './index.scss';
import Success from './success';
import validationSchema from './validations';

const FormEditResident = ({ history, location, editResident, getResident }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasData, setData] = useState(false);
  const { handleSubmit, control, errors, setValue } = useForm({
    validationSchema,
  });
  LOG(location.state);
  const { resident_id } = location.state;

  const setValues = useCallback(
    (info) => {
      Object.keys(info).map((key) => {
        let value = info[key];
        setValue(key, value);
        M.updateTextFields();
        return true;
      });
    },
    [setValue]
  );

  const getDate = useCallback(async () => {
    await getResident(resident_id, setValues);
  }, [getResident, resident_id, setValues]);

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
    editResident(resident_id, { ...values }, onSuccess);
  };

  return (
    <div className="page edit-resident-page">
      <form onSubmit={handleSubmit(handleAdd)}>
        <Form errors={errors} control={control} />
        <div className="row buttons">
          <div className="col m8">
            <div className="col m2 lef">
              <button
                type="button"
                className="btn btn-flat"
                onClick={() => history.goBack()}
              >
                Cancelar
              </button>
            </div>
            <div className="col m2 right">
              <button
                type="submit"
                className="btn btn-submit primary"
                disabled={errors.length > 0}
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
        }}
      />
    </div>
  );
};

FormEditResident.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  editResident: PropTypes.func.isRequired,
  getResident: PropTypes.func.isRequired,
};

export default FormEditResident;
