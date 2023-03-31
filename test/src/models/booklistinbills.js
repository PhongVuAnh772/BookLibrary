'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booklistinbills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booklistinbills.init({
    
    name_book: DataTypes.STRING,
    quatity: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    bill_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'booklistinbills',
    freezeTableName: true,
    timestamps: false
  });
  return booklistinbills;
};