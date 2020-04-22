import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';

const TextField = ({
  onChange,
  value,
  name,
  icon,
  label,
  type,
  required,
  size,
  onKeyPress,
  customValidity,
  customValidityMessage,
  format,
  ...rest
}) => {
  const [errorMsg, setErrorMsg] = useState();
  const handleChange = useCallback(text => onChange(text), [onChange]);

  useEffect(() => {
    setErrorMsg(null);
  }, [label]);

  const resetErrors = target => {
    target.setCustomValidity('');
    target.classList.remove('invalid');
    setErrorMsg(null);
  };

  const fill = target => {
    if (format) {
      handleChange(format(target.value.replace(/\D/g, '')));
    } else {
      handleChange(target.value);
    }
  };

  const validate = target => {
    if (!customValidityMessage) return;

    if (target.value.length === 0) {
      resetErrors(target);
      return;
    }

    if (customValidity) {
      target.setCustomValidity(
        customValidity(target.value) ? '' : customValidityMessage
      );
      setErrorMsg(target.validationMessage);
      return;
    }

    if (target.checkValidity()) {
      target.classList.remove('invalid');
      setErrorMsg(null);
    } else {
      target.classList.add('invalid');
      setErrorMsg(customValidityMessage);
    }
  };

  const handleKeyPress = useCallback(
    e => {
      if (e.key === 'Enter') onKeyPress();
    },
    [onKeyPress]
  );

  return (
    <div className={`input-field input-outlined input-size__${size}`}>
      <input
        value={value}
        type={type}
        name={name}
        id={name}
        required={required}
        className={`text-field ${required ? 'validate' : ''}`}
        onChange={({ target }) => {
          if (target && target.classList) target.classList.remove('invalid');
          fill(target);
        }}
        onBlur={({ target }) => {
          validate(target);
        }}
        onKeyPress={handleKeyPress}
        data-testid={name}
        {...rest}
      />
      {label && <label htmlFor={name}>{label}</label>}
      {icon && <i className="material-icons postfix">{icon}</i>}
      {errorMsg && <span>{errorMsg}</span>}
    </div>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  icon: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  customValidity: PropTypes.func,
  customValidityMessage: PropTypes.string,
  format: PropTypes.func,
};

TextField.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  icon: undefined,
  value: '',
  name: '',
  label: '',
  type: 'text',
  required: false,
  size: 'sm',
  customValidity: null,
  customValidityMessage: '',
  format: null,
};

export default TextField;
