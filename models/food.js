const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Traveller model
class Food extends Model {}

// create fields/columns for food model
Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    Trip_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trip',
        key: 'id',
      }
    },
    Item: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'food'
  }
);

module.exports = Food;
