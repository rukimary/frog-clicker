require("dotenv").config({});

const UsersAchievements = require("../models/UsersAchievements");

class AchievService {
  async addUserAchiev(body) {
    try {
      const createdUserAchiev = await UsersAchievements.create(body);
      const userAchiev = await UsersAchievements.findByPk(createdUserAchiev.id);

      return userAchiev;
    } catch (error) {
      return error;
    }
  }
}

module.exports = AchievService;
