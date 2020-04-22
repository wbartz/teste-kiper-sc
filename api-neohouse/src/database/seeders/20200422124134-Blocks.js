'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Blocks', [
      {
        name: 'Bloco A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bloco B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bloco C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bloco D',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bloco E',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Blocks', null, {}),
};
