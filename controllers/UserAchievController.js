const express = require("express");
const router = express.Router();
const achievService = new (require("../services/achievService"))();

router.post("/add", async (req, res) => {
  try {
    const result = await achievService.addUserAchiev(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
