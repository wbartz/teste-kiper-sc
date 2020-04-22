'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blocks = sequelize.define('Blocks', {
    name: DataTypes.STRING
  }, {});
  Blocks.associate = function(models) {
    // associations can be defined here
  };
  return Blocks;
};