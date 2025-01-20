'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("address", {
      address_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      address: { type: Sequelize.STRING(50), allowNull: false },
      address2: { type: Sequelize.STRING(50), allowNull: true, defaultValue: null, },
      district: { type: Sequelize.STRING(25), allowNull: true, defaultValue: null },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "city", key: "city_id" }
      },
      postal_code: { type: Sequelize.STRING(10), allowNull: false },
      last_update: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("address");
  }
};
