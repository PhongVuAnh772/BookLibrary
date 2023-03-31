'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    book_author: DataTypes.STRING,
    book_category: DataTypes.STRING,
    book_name: DataTypes.STRING,
    book_inventory: DataTypes.INTEGER,
    book_price: DataTypes.INTEGER,
    category_code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Book',
    freezeTableName: true,
    timestamps: false
  });
  return Book;
};