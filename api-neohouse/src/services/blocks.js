const { Blocks, sequelize } = require('../database/models');
const { QueryTypes } = require('sequelize');

module.exports = {
  getAll: async () => await Blocks.findAll(),
  getAllApartments: async (block_id) =>
    await sequelize.query(
      `SELECT
        a.id,
        a. number,
        r.full_name,
        r.email,
        r.phone
      FROM
        Apartments a
        INNER JOIN Residents r
      WHERE
        a.block_id = ${block_id}
        AND r.apartment_id = a.id
        AND r.accountable = TRUE`,
      {
        type: QueryTypes.SELECT,
      }
    ),
};
