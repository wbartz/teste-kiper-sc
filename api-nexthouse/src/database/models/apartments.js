'use strict';

/**
 * @typedef Apartments
 * @property {int} id
 * @property {int} number
 * @property {int} block
 */

module.exports = (sequelize, DataTypes) => {
  const Apartments = sequelize.define('Apartments', {
    number: DataTypes.INTEGER,
    block_id: DataTypes.INTEGER
  }, {});
  Apartments.associate = function(models) {
    Apartments.hasMany(models.Blocks, {
      foreignKey: 'block_id',
      as: 'blocks'
    })
  };
  return Apartments;
};