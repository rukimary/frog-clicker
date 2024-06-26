const express = require("express");
const router = express.Router();
const authService = new (require("../services/authService"))();

router.post("/register", async (req, res) => {
  try {
    const result = await authService.register(req.body);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password, res);
    return result;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
