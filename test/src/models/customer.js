"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer.init(
    {
      customer_adress: DataTypes.STRING,
      customer_email: DataTypes.STRING,
      customer_name: DataTypes.STRING,
      customer_phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "customer",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return customer;
};
