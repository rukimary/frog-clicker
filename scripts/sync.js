const Achievement = require("../models/Achievement");

(async () => {
  try {
    await Achievement.sync({ force: false, alter: true });
    const achievements = await Achievement.findAll();
    console.log(achievements.map((el) => el.name));
  } catch (error) {
    console.error(error);
  }
})();

const User = require("../models/User");

(async () => {
  try {
    await User.sync({ force: false, alter: true });
    const users = await User.findAll();
    console.log(users.map((el) => el.email));
  } catch (error) {
    console.error(error);
  }
})();
