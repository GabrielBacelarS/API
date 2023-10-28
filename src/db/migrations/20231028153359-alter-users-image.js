'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction((p) => {
       return Promise.all([
        queryInterface.addColumn('Users', 'image', {
          type: Sequelize.DataTypes.STRING,
          after: "email"
        },{transaction: p})
      ]);
    });
  },
  // Down - rollback - Permite que seja  desfeita a migration, permitindo a gestão das alterações no banco de dados, versionamento
   async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction((p) => {
      return Promise.all([
       queryInterface.removeColumn('Users', 'image',{transaction: p})
     ]);
   });
   },
 };
