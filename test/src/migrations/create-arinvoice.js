'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('arinvoice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
        adress: {
            type: Sequelize.STRING

        }, 
        name: {
            type: Sequelize.STRING

        }, 
        paid: {
            type: Sequelize.INTEGER

        }, 
        phone: {
            type: Sequelize.INTEGER

        }, 
        tob: {
            type: Sequelize.INTEGER

        }, 
        customer_id: {
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
    await queryInterface.dropTable('arinvoice');
  }
};