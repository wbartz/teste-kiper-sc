'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        full_name: 'Admin neohouse',
        email: 'admin@neohouse.com',
        password: '31b299f96e3c0dbd6fb019d46042d23cffca033d94f694a2e643220d559f3964',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
