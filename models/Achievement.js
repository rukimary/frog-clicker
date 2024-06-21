const DataTypes = require("sequelize");
const sequelize = require("../sequelize");

const Achievement = sequelize.define(
  "Achievement",
  {
    id: {
      type: DataTypes.INTEGER,

      autoIncrement: true,

      primaryKey: true,

      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    clicks: {
      type: DataTypes.INTEGER.UNSIGNED,

      allowNull: false,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Achievement;
