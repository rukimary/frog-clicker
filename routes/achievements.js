const express = require("express");
const router = express.Router();

/* GET achievements listing. */
router.get("/", function (req, res, next) {
  res.send("тут ачивки");
});

module.exports = router;
