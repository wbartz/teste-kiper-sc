const { Op } = require('sequelize');
const { Residents } = require('../database/models');

module.exports = {
  getByName: async (name) =>
    await Residents.findAll({
      where: {
        full_name: {
          [Op.like]: `%${name}%`,
        },
      },
    }),
  getByApartment: async (apartment_id) =>
    await Residents.findAll({
      attributes: ['id', 'accountable', 'full_name', 'cpf', 'birthday', 'email', 'phone'],
      where: {
        apartment_id,
      },
    }),
  getAccountable: async (apartment_id) =>
    await Residents.findAll({
      attributes: ['full_name', 'email', 'phone'],
      raw: true,
      where: {
        apartment_id,
        accountable: true,
      },
    }),
  getById: async (id) => await Residents.findOne({ id }),
  add: async (resident) =>
    await Residents.create({
      ...resident,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  update: async (id, resident) =>
    await Residents.update(
      { ...resident, updatedAt: new Date() },
      {
        where: {
          id,
        },
      }
    ),
  delete: async (id) =>
    await Residents.destroy({
      where: {
        id,
      },
    }),
};
