const { Blocks, sequelize } = require('../database/models');
const { QueryTypes } = require('sequelize');

module.exports = {
  getAll: async () => await Blocks.findAll(),
  getAllApartments: async (block_id) =>
    await sequelize.query(
      `SELECT
        a.id,
        a.number,
        r.full_name,
        r.email,
        r.phone
      FROM
        Apartments a
      LEFT JOIN (
          SELECT
            full_name,
            email,
            phone,
            apartment_id
          FROM
            Residents r
          WHERE accountable = TRUE) r ON r.apartment_id = a.id
      
      WHERE
        a.block_id = ${block_id}`,
      {
        type: QueryTypes.SELECT,
      }
    ),
};
