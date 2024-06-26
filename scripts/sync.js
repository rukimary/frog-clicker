const Achievement = require("../models/Achievement");
const User = require("../models/User");
const UsersAchievements = require("../models/UsersAchievements");

(async () => {
  try {
    await Achievement.sync({ force: false, alter: true });
    await User.sync({ force: false, alter: true });
    await UsersAchievements.sync({ force: false, alter: true });
    const achievements = await Achievement.findAll();
    console.log(achievements.map((el) => el.name));
  } catch (error) {
    console.error(error);
  }
})();
