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
    await queryInterface.createTable("users", {
      user_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      first_name: { type: Sequelize.STRING(50), allowNull: false },
      last_name: { type: Sequelize.STRING(50), allowNull: false },
      email: { type: Sequelize.STRING, unique: true, allowNull: false, validate: { isEmail: true } },
      password: { type: Sequelize.STRING, allowNull: false, validate: { is: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, min: 8, max: 20 } },
      avatar: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      mobile: { type: Sequelize.STRING(10), allowNull: false, unique: true, validate: { is: /^\+?[1-9]\d{1,14}$/, min: 10, max: 10 } },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "roles", key: "role_id", },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("users");
  }
};
