'use strict';

/**
 * @typedef Users
 * @property {number} id
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
  return Users;
};