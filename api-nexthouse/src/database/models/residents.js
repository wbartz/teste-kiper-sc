'use strict';

/**
 * @typedef Residents
 * @property {int} id
 * @property {string} full_name
 * @property {string} phone
 * @property {string} cpf
 * @property {string} email
 * @property {string} birthday 
 * @property {bool} accountable
 * @property {int} apartment_id
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
  Residents.associate = function(models) {
    Residents.hasMany(models.Apartments, {
      foreignKey: 'apartment_id',
      as: 'apartments'
    });
  };
  return Residents;
};