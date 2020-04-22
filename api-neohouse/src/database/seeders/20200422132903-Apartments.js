'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Apartments', [
      {
        number: 11,
        block_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 12,
        block_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 13,
        block_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 14,
        block_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 15,
        block_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Apartments', null, {}),
};
