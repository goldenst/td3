const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Users = require("../Models/Users");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//@Route    GET api/user/
//@Desc     get User
//@Access   Private
//@Status   Works Done
router.get("/", (req, res) => {
  Users.findAll()
    .then(users => {
      console.log(users);
      res.json(users);
    })
    .catch(err => console.log("err", err));
});

//@Route    POST api/user/add
//@Desc     Register User
//@Access   Private
//@Status   WORKING Done
router.post(
  "/add",
  [
    // username must be an email
    check("email", "Must be an Email").isEmail(),
    // password must be at least 6 chars long
    check("password", "Password must be at least 6 Charicters").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await Users.findOne({ where: { email: req.body.email } });
      // Options ?? ///////////////////////////////////////////////////////////////////////////////////

      if (user) {
        return res.status(400).json({ msg: "User Allready exists" });
      }

      user = new Users({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await Users.create({
        name: req.body.name,
        email: req.body.email,
        password: user.password
      })
        //.then(user => console.log(user))
        .then(res.send(200))
        .catch(err => console.log("Err", err));
    } catch (err) {
      console.log("new User", err);
    }
  }
);

module.exports = router;
