const { QueryTypes } = require('sequelize');
const { Residents, sequelize } = require('../database/models');

module.exports = {
  search: async (field, term) =>
    await sequelize.query(`
      SELECT
        r.id,
        b.name,
        a.number,
        r.full_name,
        r.email,
        r.phone
      FROM Residents r
      INNER JOIN Apartments a ON r.apartment_id = a.id
      INNER JOIN Blocks b ON a.block_id = b.id
      WHERE r.${field} LIKE '%${term}%'`,
      {
        type: QueryTypes.SELECT,
      }
    ),
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
  getById: async (id) => await Residents.findOne({ where: { id } }),
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
