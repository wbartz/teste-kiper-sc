'use strict';

/**
 * @typedef Residents
 * @property {int} id
 * @property {string} full_name
 * @property {string} phone
 * @property {string} cpf
 * @property {string} email
 * @property {string} birthday 
*/

module.exports = (sequelize, DataTypes) => {
  const Residents = sequelize.define('Residents', {
    full_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.STRING
  }, {});
  Residents.associate = function(models) {
    // associations can be defined here
  };
  return Residents;
};