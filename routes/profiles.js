const express = require("express");
const router = express.Router();

//@Route    GET api/profile
//@Desc     get all profiles
//@Access   Private
router.get("/", (req, res) => {
  res.send("Get all profiles");
});

//@Route    POST api/profiles
//@Desc     add New profiles
//@Access   Private
router.post("/", (req, res) => {
  res.send("Add profiles");
});

//@Route    PUT api/profiles/:id
//@Desc     Update profiles
//@Access   Private
router.put("/:id", (req, res) => {
  res.send("Update profiles");
});

//@Route    DELETE api/profiles/:id
//@Desc     DELETE profiles
//@Access   Private
router.delete("/:id", (req, res) => {
  res.send("Delete profiles");
});

module.exports = router;
