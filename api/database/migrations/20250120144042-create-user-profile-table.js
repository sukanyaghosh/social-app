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
    await queryInterface.createTable("profiles", {
      profile_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
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
      bio: { type: Sequelize.TEXT, allowNull: true, defaultValue: null },
      dob: { type: Sequelize.DATE, allowNull: false, defaultValue: null },
      gender: { type: Sequelize.ENUM, values: ['male', 'female', 'unknown'], defaultValue: 'unknown' },
      degree: { type: Sequelize.STRING, allowNull: true, defaultValue: '' },
      website: { type: Sequelize.STRING, allowNull: true, defaultValue: '' },
      company: { type: Sequelize.STRING, allowNull: false },
      designation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "designations", key: "designation_id" },
      },
      noticeperiod: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
      resume: { type: Sequelize.STRING, defaultValue: '', allowNull: true },
      total_exp: { type: Sequelize.DECIMAL(5, 2), allowNull: true, defaultValue: 0 },
      salary: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0.00, allowNull: true },
      skills: { type: Sequelize.ARRAY(Sequelize.JSONB), allowNull: true, defaultValue: [] },
      educations: { type: Sequelize.ARRAY(Sequelize.JSONB), allowNull: true, defaultValue: [] },
      experiences: { type: Sequelize.ARRAY(Sequelize.JSONB), allowNull: true, defaultValue: [] },
      employments: { type: Sequelize.ARRAY(Sequelize.JSONB), allowNull: true, defaultValue: [] },
      social: { type: Sequelize.JSONB, allowNull: true, defaultValue: {} },
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
    await queryInterface.dropTable("profiles")
  }
};
