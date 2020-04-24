import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../components/Card';
import SelectField from '../../components/SelectField';
import TextField from '../../components/TextField';
import { AppContext } from '../../containers/StoreProvider';
import { formatCpf, formatDate, formatPhone } from '../../helpers';
import './index.scss';

const fieldOptions = [
  { value: 'full_name', label: 'Nome completo' },
  { value: 'cpf', label: 'CPF' },
  { value: 'phone', label: 'Telefon' },
  { value: 'birthday', label: 'Data nasc.' },
];

const Dashboard = ({ getDashboard, dashboard, history }) => {
  const [hasData, setData] = useState(false);
  const [field, setField] = useState('full_name');
  const [term, setTerm] = useState('');

  useEffect(() => {
    const getData = async () => {
      await getDashboard();
      setData(true);
    };
    if (!hasData) {
      getData();
    }
  }, [hasData, getDashboard]);

  const handleSearch = () =>
    history.push('/search', {
      field,
      term,
    });

  const handleChange = (value) => {
    setTerm('');
    setField(value);
  };

  const format =
    field === 'cpf'
      ? formatCpf
      : field === 'birthday'
      ? formatDate
      : field === 'phone'
      ? formatPhone
      : null;

  return (
    <div className="page dashboard">
      <div className="search-field">
        <div className="row">
          <div className="col m10">
            <div className="col md3">
              <SelectField
                value={field}
                options={fieldOptions}
                onChange={handleChange}
              />
            </div>
            <div className="col m4">
              <TextField
                size="md"
                name="search"
                label="Buscar morador"
                value={term}
                onChange={setTerm}
                format={format}
              />
            </div>
            <div className="col md2">
              <button
                className="btn primary"
                type="button"
                onClick={handleSearch}
              >
                <i className="material-icons">search</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-page">
        {dashboard ? (
          dashboard.map((line) => {
            return (
              <Card
                key={line.id}
                id={String(line.id)}
                title={line.name}
                footer={
                  <div className="content">
                    <div className="content-line">
                      <i className="material-icons">house</i>
                      <span>Apartamentos</span>
                      <span className="count">{line.apartments}</span>
                    </div>
                    <div className="content-line">
                      <i className="material-icons">person</i>
                      <span>Moradores</span>
                      <span className="count">{line.residents}</span>
                    </div>
                  </div>
                }
                icon="apartment"
                onEdit={() =>
                  history.push(
                    `/apartamentos/${line.name
                      .replace(' ', '-')
                      .toLowerCase()}`,
                    {
                      block_id: line.id,
                    }
                  )
                }
              />
            );
          })
        ) : (
          <div className="empty">
            <i className="material-icons">apartment</i>
          </div>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter((props) => (
  <Dashboard {...useContext(AppContext)} {...props} />
));
