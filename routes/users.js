const express = require("express");
const router = express.Router();

//@Route    POST api/user
//@Desc     Register User
//@Access   Private
router.post("/", (req, res) => {
  res.send("Register a User");
});

module.exports = router;
