'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let servicios = [];

    for (let i = 0; i < 10; i++) {
      servicios.push({
        descripcion: 'Servicio ' + i,
        precio: Math.floor(Math.random() * 40),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('servicios', servicios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
