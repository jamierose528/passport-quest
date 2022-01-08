const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class Packing extends Model {}

// create fields/columns for Trip model
Packing.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    Trip_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    item: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'packing'
});

module.exports = Packing;