'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    
    static associate(models) {
    }
  }
  Rule.init({
    
    rule_desciption: DataTypes.STRING,
    rule_name: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rule',
    freezeTableName: true,
    timestamps: false
  });
  return Rule;
};