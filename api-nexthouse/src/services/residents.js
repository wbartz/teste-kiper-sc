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
      where: {
        apartment_id,
      },
    }),
  add: async (resident) => await Residents.create(resident),
  update: async (id, resident) =>
    await Residents.update(resident, {
      where: {
        id,
      },
    }),
  delete: async (id) =>
    await Residents.destroy({
      where: {
        id,
      },
    }),
};
