import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../containers/StoreProvider';
import Card from '../../components/Card';
import './index.scss';

const Dashboard = ({ getDashboard, dashboard, history }) => {
  const [hasData, setData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await getDashboard();
      setData(true);
    };
    if (!hasData) {
      getData();
    }
  }, [hasData, getDashboard]);

  return (
    <div className="page">
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
                  history.push(`/apartamentos/${line.name.replace(' ', '-').toLowerCase()}`, {
                    block_id: line.id,
                  })
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
