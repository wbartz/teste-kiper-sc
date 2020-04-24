import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../containers/StoreProvider';
import { withRouter } from 'react-router-dom';
import Form from './form';
import validations from './validations';
import Success from './success';
import './index.scss';

const FormAddApartment = ({ history, location, addApartment }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [user, setUser] = useState({});
  const { handleSubmit, control, errors } = useForm({
    validations,
  });

  const { block_id } = location.state;

  const onSuccess = (values) => {
    setShowSuccess(true);
    setUser(values);
  };

  const handleAdd = (values) => {
    addApartment({ ...values, block_id }, onSuccess);
  };

  return (
    <div className="page add-apartment-page">
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

export default withRouter((props) => (
  <FormAddApartment {...useContext(AppContext)} {...props} />
));
