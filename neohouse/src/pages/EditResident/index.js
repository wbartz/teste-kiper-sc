import PropTypes from 'prop-types';
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../containers/StoreProvider';
import { withRouter } from 'react-router-dom';
import Form from './form';
import validationSchema from './validations';
import M from 'materialize-css';
import Success from './success';
import './index.scss';
import { LOG } from '../../helpers';

const FormEditResident = ({ history, location, editResident, getResident }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasData, setData] = useState(false);
  const { handleSubmit, control, errors, setValue } = useForm({
    validationSchema,
  });
  const { apartment_id, resident_id } = location.state;

  const setValues = (info) => {
    return Object.keys(info).map((key) => {
      let value = info[key];
      setValue(key, value);
      M.updateTextFields();
      return;
    });
  };

  const getDate = useCallback(async () => {
    await getResident(resident_id, setValues);
  }, [getResident]);

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
    editResident(resident_id, { ...values, apartment_id }, onSuccess);
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

export default withRouter((props) => (
  <FormEditResident {...useContext(AppContext)} {...props} />
));
