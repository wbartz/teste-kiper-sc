'use strict';

/**
 * @typedef Residents
 * @property {number} id
 * @property {string} full_name
 * @property {string} phone
 * @property {string} cpf
 * @property {string} email
 * @property {string} birthday 
 * @property {bool} accountable
 * @property {number} apartment_id
*/

module.exports = (sequelize, DataTypes) => {
  const Residents = sequelize.define('Residents', {
    full_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.STRING,
    accountable: DataTypes.BOOLEAN,
    apartment_id: DataTypes.INTEGER
  }, {});
  return Residents;
};