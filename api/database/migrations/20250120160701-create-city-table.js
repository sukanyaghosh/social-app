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
    await queryInterface.createTable("city", {
      city_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      city: { type: Sequelize.STRING, allowNull: false, unique: true },
      country_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: "country", key: "country_id" }
      },
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
    await queryInterface.dropTable("city")
  }
};
