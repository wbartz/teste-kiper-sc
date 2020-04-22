'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Residents', [
      {
        full_name: 'Morador Ap11',
        email: 'morador_ap11@neohouse.com',
        phone: '(51) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Morador Ap12',
        email: 'morador_ap12@neohouse.com',
        phone: '(51) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Morador Ap13',
        email: 'morador_ap13@neohouse.com',
        phone: '(51) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Morador Ap14',
        email: 'morador_ap14@neohouse.com',
        phone: '(51) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Morador Ap15',
        email: 'morador_ap15@neohouse.com',
        phone: '(51) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Residents', null, {}),
};
