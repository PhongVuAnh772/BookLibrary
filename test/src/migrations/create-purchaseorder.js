'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('purchaseorder', {
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
          book_price: {
            type: Sequelize.INTEGER
    
          },          
          book_description: {type: Sequelize.STRING},
          cover_book: {type: Sequelize.STRING},
          book_quatity: {type: Sequelize.STRING},
        payments: {type: Sequelize.STRING}, 
        received_date: {type: Sequelize.STRING},
        
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
    await queryInterface.dropTable('purchaseorder');
  }
};