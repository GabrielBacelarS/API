'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Situations', [
      {
      nameSituation: "ATIVO",
      createdAt: new Date(),
      updatedAt: new Date()
       },
       {
        nameSituation: "INATIVO",
        createdAt: new Date(),
        updatedAt: new Date()
         }
  ]);
  },

  async down(queryInterface, Sequelize) {},
};
