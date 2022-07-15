'use strict';

const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', 
    [
      {
        email: "teste@teste.com",
        password_hash: "123456",
        name: "Teste",
        phone: "123456789",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: "teste@teste.com",
        password_hash: "123456",
        name: "Teste",
        phone: "123456789",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: "tes@teste.com",
        password_hash: "123456",
        name: "Tesrre",
        phone: "123456789",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]
  ),

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
