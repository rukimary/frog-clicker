const express = require("express");
const router = express.Router();
const userService = new (require("../services/userService"))();
const User = require("../models/User");

router.post("/updateClicks", async (req, res) => {
  try {
    const { id, clicks } = req.body;
    const user = await User.findByPk(id);
    if (user.clicks <= clicks) {
      const result = await userService.updateClicks(id, clicks);
      return res.status(200).json(result);
    } else return res.status(400).json({ error: "Кликов маловато" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/getMe", async (req, res) => {
  try {
    const { id } = req.body;
    const result = await User.findByPk(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
