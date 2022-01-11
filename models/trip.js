const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Trip model
class Trip extends Model {}

// create fields/columns for Trip model
Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 1,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 1,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 1,
    },
    startDay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endDay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        isDecimal: true,
      },
    },
    accommodation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transportation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emergencyContactName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emergencyContactPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trip",
  }
);

module.exports = Trip;
