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
    await queryInterface.createTable("comments", {
      comment_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "post_id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      message: { type: Sequelize.STRING, allowNull: true, defaultValue: '' },
      status: {
        type: Sequelize.ENUM, // Status options for messages
        values: ['approved', 'rejected', 'draft'],
        allowNull: false,
        defaultValue: 'approved', // Default status is 'active',
      },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("comments")
  }
};
