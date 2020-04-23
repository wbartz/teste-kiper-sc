import PropTypes from 'prop-types';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import './index.scss';

const Table = ({ header, lines, onEdit, onRemove, onView }) => {
  return (
    <div className="table">
      <table className="responsive-table striped">
        <thead>
          <tr>
            {header.map((title) => (
              <td key={Math.random()}>{title}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {lines.length > 0 ? (
            lines.map((line) => (
              <tr key={Math.random()}>
                {Object.keys(line).map((index) => {
                  if (index !== 'id')
                    return <td key={line[index]}>{line[index]}</td>;
                  return null;
                })}
                <td className="table-actions right">
                  <ReactTooltip key={line.id} />
                  <i
                    className="material-icons view"
                    data-tip="Ver Moradores"
                    onClick={() => onView(line.id)}
                  >
                    visibility
                  </i>
                  <i
                    className="material-icons edit"
                    data-tip="Editar Apartamento"
                    onClick={() => onEdit(line.id)}
                  >
                    edit
                  </i>
                  <i
                    className="material-icons remove"
                    data-tip="Remover Apartamento"
                    onClick={() => onRemove(line.id)}
                  >
                    delete
                  </i>
                </td>
              </tr>
            ))
          ) : (
            <tr className="no-results">
              <td colspan={header.length} className="center">
                Nenhum registro encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  header: PropTypes.oneOfType([PropTypes.array]).isRequired,
  lines: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Table;
