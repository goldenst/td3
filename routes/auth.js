const express = require("express");
const router = express.Router();

//@Route    GET api/auth
//@Desc     get loged in User
//@Access   Private
router.get("/", (req, res) => {
  res.send("Get loged in User");
});

//@Route    POST api/auth
//@Desc     auth User and Get Token
//@Access   Public
router.post("/", (req, res) => {
  res.send("login User");
});


module.exports = router;
