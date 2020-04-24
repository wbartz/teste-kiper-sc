'use strict';

/**
 * @typedef Apartments
 * @property {number} id
 * @property {number} number
 * @property {number} block_id
 */

module.exports = (sequelize, DataTypes) => {
  const Apartments = sequelize.define(
    'Apartments',
    {
      number: DataTypes.INTEGER,
      block_id: DataTypes.INTEGER,
    },
    {}
  );
  return Apartments;
};
