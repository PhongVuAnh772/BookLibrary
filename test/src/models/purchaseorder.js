'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchaseorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  purchaseorder.init({
    book_author: DataTypes.STRING,
    book_category: DataTypes.STRING,
    book_name: DataTypes.STRING,
    book_price: DataTypes.INTEGER,
    book_description: DataTypes.STRING,
    cover_book: DataTypes.STRING,
    book_quatity: DataTypes.STRING,
    payments: DataTypes.STRING, 
    received_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'purchaseorder',
    freezeTableName: true,
    timestamps: false
  });
  return purchaseorder;
};