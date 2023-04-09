'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
        rule_desciption: {
            type: Sequelize.STRING

        },
        rule_name: {
            type: Sequelize.STRING

        },
        status: {
            type: Sequelize.STRING

        },
        is_deleted: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rule');
  }
};