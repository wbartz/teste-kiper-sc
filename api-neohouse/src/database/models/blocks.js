'use strict';

/**
 * @typedef Blocks
 * @property {number} id
 * @property {string} name
 */

module.exports = (sequelize, DataTypes) => {
  const Blocks = sequelize.define('Blocks', {
    name: DataTypes.STRING
  }, {});
  return Blocks;
};