'use strict';

/**
 * @typedef Apartments
 * @property {int} id
 * @property {int} number
 * @property {string} block
 */

module.exports = (sequelize, DataTypes) => {
  const Apartments = sequelize.define('Apartments', {
    number: DataTypes.INTEGER,
    block: DataTypes.STRING
  }, {});
  Apartments.associate = function(models) {
    // associations can be defined here
  };
  return Apartments;
};