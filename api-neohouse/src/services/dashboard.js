const { sequelize } = require('../database/models');
const { QueryTypes } = require('sequelize');

module.exports = {
  getDashboard: async () =>
    await sequelize.query(
      `SELECT
        b.*,
        COALESCE((
          SELECT
            COUNT(*)
          FROM
            Apartments a
          WHERE
            a.block_id = b.id
          GROUP BY a.block_id
        ), 0) AS apartments,
        COALESCE((
          SELECT
            COUNT(*)
          FROM Residents r
          INNER JOIN Apartments a2
          WHERE a2.block_id = b.id
          AND r.apartment_id=a2.id
        ),0) as residents
      FROM
        Blocks b
      GROUP BY b.id
      ORDER BY
        b.id
  `,
      {
        logging: false,
        type: QueryTypes.SELECT,
      }
    ),
};
