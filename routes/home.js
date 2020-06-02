const express = require("express");
const router = express.Router();

// Getting all products
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
