import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { formatCpf, formatPhone, formatDate } from '../../helpers';
import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField';

const Form = ({ errors, control }) => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [birthday, setBirthday] = useState();
  const [accountable, setAccountable] = useState(0);
  const statusOptions = [
    { value: false, label: 'Não' },
    { value: true, label: 'Sim' },
  ];

  return (
    <>
      <div className="row">
        <div className="col m4">
          <Controller
            as={
              <SelectField
                value={accountable.toString()}
                options={statusOptions}
                onChange={setAccountable}
              />
            }
            name="accountable"
            label="Responsável"
            control={control}
          />
        </div>
      </div>
      <div className="row">
        <div className="col m8">
          <Controller
            as={<TextField onChange={setFullName} />}
            valueName={fullName}
            name="full_name"
            label="Nome completo"
            defaultValue={fullName}
            control={control}
            error={errors.fullName && errors.fullName.message}
            size="auto"
          />
        </div>
      </div>
      <div className="row">
        <div className="col m4">
          <Controller
            as={<TextField onChange={setBirthday} />}
            valueName={birthday}
            name="birthday"
            label="Data de nascimento"
            defaultValue={birthday}
            type="datepicker"
            control={control}
            format={formatDate}
            error={errors.birthday && errors.birthday.message}
            size="auto"
          />
        </div>
        <div className="col m4">
          <Controller
            as={<TextField onChange={setCpf} />}
            valueName={cpf}
            name="cpf"
            label="CPF"
            defaultValue={cpf}
            format={formatCpf}
            control={control}
            error={errors.cpf && errors.cpf.message}
            size="auto"
          />
        </div>
      </div>
      <div className="row">
        <div className="col m4">
          <Controller
            as={<TextField onChange={setEmail} />}
            valueName={email}
            name="email"
            label="E-mail"
            defaultValue={email}
            control={control}
            error={errors.email && errors.email.message}
            size="auto"
          />
        </div>
        <div className="col m4">
          <Controller
            as={<TextField onChange={setPhone} />}
            valueName={phone}
            name="phone"
            label="Telefone"
            defaultValue={phone}
            format={formatPhone}
            control={control}
            error={errors.phone && errors.phone.message}
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
