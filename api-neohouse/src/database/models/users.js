'use strict';

/**
 * @typedef Users
 * @property {int} id
 * @property {string} full_name
 * @property {string} email
 * @property {string} password
 */

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};