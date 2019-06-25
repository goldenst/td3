const express = require("express");
const router = express.Router();

//@Route    POST api/user
//@Desc     Register User
//@Access   Private
router.post("/", (req, res) => {
  res.send("Register a User");
});

// User.findAll().then(users => {
//   console.log("All users:", JSON.stringify(users, null, 4));
// });
module.exports = router;
