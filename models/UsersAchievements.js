const DataTypes = require("sequelize");
const sequelize = require("../sequelize");
const User = require("./User");
const Achievement = require("./Achievement");

const UsersAchievements = sequelize.define(
  "UsersAchievements",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    achievement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Achievement,
        key: "id",
      },
    },
  },
  {
    underscored: true,
    tableName: "users_achievements",
    timestamps: true,
  }
);

User.belongsToMany(Achievement, { through: UsersAchievements });
Achievement.belongsToMany(User, { through: UsersAchievements });

module.exports = UsersAchievements;
