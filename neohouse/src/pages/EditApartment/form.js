import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '../../components/TextField';
import { onlyNumbers } from '../../helpers';

const Form = ({ errors, control }) => {
  const [number, setNumber] = useState();

  return (
    <>
      <div className="row">
        <div className="col m4">
          <Controller
            as={<TextField onChange={setNumber} />}
            valueName={number}
            name="number"
            label="Número do apartamento"
            defaultValue={number}
            control={control}
            format={onlyNumbers}
            errormsg={errors.number && errors.number.message}
            size="auto"
          />
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.object]),
  control: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

Form.defaultProps = {
  errors: {},
};

export default Form;
