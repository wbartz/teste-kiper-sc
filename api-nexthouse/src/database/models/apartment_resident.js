'use strict';

/**
 * @typedef Apartment_Resident
 * @property {int} resident_id
 * @property {int} apartment_id
 * @property {bool} accountable
 */

module.exports = (sequelize, DataTypes) => {
  const Apartment_Resident
   = sequelize.define(
    'Apartment_Resident',
    {
      resident_id: DataTypes.INTEGER,
      apartment_id: DataTypes.INTEGER,
      accountable: DataTypes.BOOLEAN,
    },
    {}
  );
  Apartment_Resident.associate = function (models) {
    Apartment_Resident.hasMany(models.Residents, {
      foreignKey: 'resident_id',
      as: 'residents',
      onDelete: 'CASCADE',
    });

    Apartment_Resident.hasMany(models.Apartments, {
      foreignKey: 'apartment_id',
      as: 'apartments',
      onDelete: 'CASCADE',
    });
  };
  return Apartment_Resident;
};
