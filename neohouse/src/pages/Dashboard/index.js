import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../containers/StoreProvider';
import './index.scss';

const Dashboard = ({ getDashboard, dashboard }) => {
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
    <div className="dashboard-page">
      {dashboard ? (
        dashboard.map((line) => {
          return (
            <div className="card" key={line.id}>
              <div className="card-header-image">
                <div className="icon">
                  <i className="material-icons">apartment</i>
                </div>
              </div>
              <div className="card-body">
                <div className="title">{line.name}</div>
                <div className="content">
                  <div className="content-line">
                    <i className="material-icons">house</i>
                    <span>Apartamentos: {line.apartments}</span>
                  </div>
                  <div className="content-line">
                    <i className="material-icons">person</i>
                    <span>Moradores: {line.residents}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty">
          <i className="material-icons">apartment</i>
        </div>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getDashboard: PropTypes.func.isRequired,
};

export default (props) => <Dashboard {...useContext(AppContext)} {...props} />;
