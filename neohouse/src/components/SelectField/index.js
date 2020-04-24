import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import './index.scss';

const SelectField = ({
  onChange,
  value,
  name,
  label,
  options,
  register,
  errormsg,
  disabled,
}) => {
  const handleChange = useCallback(text => onChange(text), [onChange]);

  return (
    <div
      className={`input-field select input-outlined ${errormsg && 'invalid'}`}
    >
      <select
        disabled={disabled}
        className="browser-default"
        ref={register}
        value={value}
        name={name}
        id={name}
        onChange={event => {
          handleChange(event.target.value);
        }}
        data-testid={name}
      >
        {options.map(line => (
          <option key={`${line.label}-${line.value}`} value={line.value}>
            {line.label}
          </option>
        ))}
      </select>
      {label && <label htmlFor={name}>{label}</label>}
      {errormsg && (
        <span className="error">
          <i className="material-icons left">error</i>
          {errormsg}
        </span>
      )}
    </div>
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
  register: PropTypes.oneOfType([PropTypes.object]),
};

SelectField.defaultProps = {
  onChange: () => {},
  value: '',
  name: '',
  label: '',
  errorMsg: '',
  disabled: false,
  register: null,
};

export default SelectField;
