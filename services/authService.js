require("dotenv").config({});

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { JWT_SECRET } = process.env;

class AuthService {
  async register(body) {
    try {
      body.password = await bcrypt.hash(body.password, 10);
      const createdUser = await User.create(body);
      const user = await User.findByPk(createdUser.id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async login(email, password, res) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: "Неавторизован!" });
      }

      const passwordTrue = await bcrypt.compare(password, user.password);
      if (passwordTrue) {
        const user_ = (await User.findByPk(user.id)).dataValues;
        const token = jwt.sign({ data: user_ }, JWT_SECRET);
        return res.status(200).json({
          ...user_,
          access_token: token,
        });
      } else {
        return res.status(401).json({ error: "Неавторизован!" });
      }
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}

module.exports = AuthService;
