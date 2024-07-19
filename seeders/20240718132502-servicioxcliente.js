'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let servicioxclientes = [];
    for (let i = 1; i <= 10; i++) {
      servicioxclientes.push({
        codigocliente: Math.floor(1 + Math.random() * 10),
        codigoservicio: Math.floor(1 + Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('servicioxclientes', servicioxclientes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('servicioxclientes', null, {});
  }
};
