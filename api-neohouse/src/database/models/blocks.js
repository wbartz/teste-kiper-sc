'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blocks = sequelize.define('Blocks', {
    name: DataTypes.STRING
  }, {});
  return Blocks;
};