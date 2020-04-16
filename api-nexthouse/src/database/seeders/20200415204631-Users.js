'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
       full_name: 'Admin NextHouse',
       email: 'admin@nexthouse.com',
       password: '5732c10582791878a1ddf059230392d400886d4837178054db1c6d49d4e03311',
       createdAt: new Date(),
       updatedAt: new Date(),
     }
   ])
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
