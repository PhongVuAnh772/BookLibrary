'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_author: {
        type: Sequelize.STRING
      },
      book_category: {
        type: Sequelize.STRING

      },
      book_name: {
        type: Sequelize.STRING

      },
      book_inventory: {
        type: Sequelize.INTEGER

      },
      book_price: {
        type: Sequelize.INTEGER

      },
      category_code: {
        type: Sequelize.STRING

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
    await queryInterface.dropTable('book');
  }
};