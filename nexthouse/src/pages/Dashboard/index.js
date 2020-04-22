import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../containers/StoreProvider';
import BlockIcon from '../../assets/ic-block.svg';

const Dashboard = ({ getDashboard }) => {
  const [hasData, setData] = useState(false);
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    if (!hasData) {
      getDashboard(setDashboard);
      setData(true);
    }
  }, [hasData]);

  return (
    <>
      {dashboard && dashboard.map(line => {
        return (
          <div className="card">
            <div className="icon">
              <img src={BlockIcon} alt={line.name} />
            </div>
            <div className="title">{line.name}</div>
            <div className="content">
              <div className="content-line">
                <img className="icon" alt="Apartamentos" />
                <span>{line.apartments}</span>
              </div>
              <div className="content-line">
                <img className="icon" alt="Moradores" />
                <span>{line.residents}</span>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

Dashboard.propTypes = {
  getDashboard: PropTypes.func.isRequired,
};

export default (props) => <Dashboard {...useContext(AppContext)} {...props} />;
