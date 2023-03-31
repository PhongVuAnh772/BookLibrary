'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arinvoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Arinvoice.init({
    adress: DataTypes.STRING, 
    name: DataTypes.STRING, 
    paid: DataTypes.INTEGER, 
    phone: DataTypes.INTEGER, 
    tob: DataTypes.INTEGER, 
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Arinvoice',
    freezeTableName: true,
    timestamps: false
  });
  return Arinvoice;
};