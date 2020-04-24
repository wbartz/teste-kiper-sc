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
                  if (index !== 'id') {
                    if (typeof line[index] === 'boolean') {
                      return (
                        <td key={line[index]} className="status">
                          <i
                            className={`material-icons ${
                              line[index] ? 'success' : 'danger'
                            }`}
                          >
                            {line[index] ? 'check_circle' : 'cancel'}
                          </i>
                        </td>
                      );
                    }
                    return (
                      <td key={line[index] || Math.random()}>
                        {line[index] || ' - '}
                      </td>
                    );
                  }
                  return null;
                })}
                <td className="table-actions right">
                  <ReactTooltip key={line.id} />
                  {onView && (
                    <i
                      className="material-icons view"
                      data-tip="Visualizar"
                      onClick={() => onView(line)}
                    >
                      visibility
                    </i>
                  )}
                  {onEdit && (
                    <i
                      className="material-icons edit"
                      data-tip="Editar"
                      onClick={() => onEdit(line)}
                    >
                      edit
                    </i>
                  )}
                  {onRemove && (
                    <i
                      className="material-icons remove"
                      data-tip="Remover"
                      onClick={() => onRemove(line)}
                    >
                      delete
                    </i>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr className="no-results">
              <td colSpan={header.length} className="center">
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
  lines: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
  onRemove: PropTypes.func,
};

Table.defaultProps = {
  onEdit: null,
  onView: null,
  onRemove: null,
};

export default Table;
