'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booklistinbills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
        name_book: {
            type: Sequelize.STRING

        },
        quatity: {
            type: Sequelize.INTEGER

        },
        total_price: {
            type: Sequelize.INTEGER

        },
        bill_id: {
            type: Sequelize.INTEGER

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
    await queryInterface.dropTable('booklistinbills');
  }
};