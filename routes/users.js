const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Users = require("../Models/Users");

//@Route    POST api/user/add
//@Desc     Register User
//@Access   Private
router.post("/add", (req, res) => {
 
  Users.create({
    name,
    email,
    password
  })
    .then((user) => console.log(user))
    .catch(err => console.log("Err", err));
});

//@Route    GET api/user/
//@Desc     get User
//@Access   Private
router.get('/' , (req,res) => {
  Users.findAll()
  .then(users => {
    console.log(users)
    res.json(users)
  })
  .catch(err => console.log('err', err))
})

module.exports = router;
