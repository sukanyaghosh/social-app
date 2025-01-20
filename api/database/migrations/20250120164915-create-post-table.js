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
    await queryInterface.createTable("posts", {
      post_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
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
      content: { type: Sequelize.TEXT, allowNull: false },
      media: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false, defaultValue: null },
      code: { type: Sequelize.TEXT, defaultValue: null, allowNull: true },
      tag: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: true, defaultValue: null },
      status: { type: Sequelize.ENUM, allowNull: false, values: ['public', 'private', 'friends', 'draft'], defaultValue: "public" },
      views_count: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0, },
      features: { type: Sequelize.JSONB, allowNull: true, defaultValue: null },
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
    await queryInterface.dropTable("posts")
  }
};
