require("dotenv").config({});

const User = require("../models/User");

class UserService {
  async updateClicks(id, clicks) {
    try {
      const user = await User.findByPk(id);
      user.clicks = clicks;
      const updatedUser = await user.save();

      return updatedUser;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserService;
