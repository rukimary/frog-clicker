const express = require("express");
const router = express.Router();
const Achievement = require("../models/Achievement");

router.get("/findOne", async (req, res) => {
  try {
    const { id } = req.body;
    const result = await Achievement.findByPk(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/findAll", async (req, res) => {
  try {
    const result = await Achievement.findAll();
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
