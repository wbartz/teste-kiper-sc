import PropTypes from 'prop-types';
import React from 'react';
import ReactTooltip from "react-tooltip";
import './index.scss';

const Card = ({ onEdit, id, title, icon, footer }) => {
  return (
    <div className="card">
      <ReactTooltip key={id} />
      <div className="card-header-image">
        <div className="icon">
          <i className="material-icons">{icon}</i>
        </div>
      </div>
      <div className="card-header-edit">
        <i
          onClick={onEdit}
          className="material-icons"
          data-tip="Ver apartamentos"
        >
          visibility
        </i>
      </div>
      <div className="card-body">
        <div className="title">{title}</div>
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
};

Card.propTypes = {
  onEdit: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  footer: PropTypes.node,
};

Card.defaultProps = {
  footer: null,
};

export default Card;