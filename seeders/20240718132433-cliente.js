'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let clientes = [];
    let nombres = ['Juan', 'Ana', 'Miguel', 'Lucia', 'Pedro', 'María', 'Santiago', 'Laura', 'Jorge', 'Marta'];
    let apellidos = ['Pérez', 'Rodríguez', 'López', 'Martínez', 'Sánchez', 'García', 'Fernández', 'Gómez', 'Díaz', 'Moreno'];

    for (let i = 1; i <= 10; i++) {
      clientes.push({
        codigo: i,
        nombre: nombres[i - 1],
        apellido: apellidos[i - 1],
        cedula: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('clientes', clientes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
