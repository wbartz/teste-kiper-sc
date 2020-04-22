const {sequelize} = require('../database/models');
const { QueryTypes } = require('sequelize');

module.exports = {
  getDashboard: async () =>
    await sequelize.query(
      `SELECT
  b.*,
  (
    SELECT
      COUNT(*)
    FROM
      Apartments a
    WHERE
      a.block_id = b.id
    GROUP BY a.block_id
  ) AS apartments,
  (
    SELECT
      COUNT(*)
    FROM Residents r
    INNER JOIN Apartments a2
    WHERE a2.block_id = b.id
    AND r.apartment_id=a2.id
  ) as residents
    FROM
      Blocks b
    GROUP BY b.id
    ORDER BY
      b.id
  `,
      {
        logging: console.log,
        type: QueryTypes.SELECT,
      }
    ),
};
