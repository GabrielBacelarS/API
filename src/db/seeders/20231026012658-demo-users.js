'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Gabriel Bacelar",
        email: "teste@gmail.com",
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
  ]);
  },

  async down (queryInterface, Sequelize) {

  }
};
