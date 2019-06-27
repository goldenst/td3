const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Users = require("../Models/Users");
const jwt = require("jsonwebtoken");
const config = require("config");
const uuid = require("uuid/v4");
var randomId = require("random-id-util");
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
//@Status   Working
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

      if (user) {
        return res.status(400).json({ msg: "User Allready exists" });
      }
      // create random id for jwt payload
      var ruid = randomId(32);

      user = new Users({
        ruid,
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await Users.create({
        uid: ruid,
        name: req.body.name,
        email: req.body.email,
        password: user.password
      });

      const payload = {
        user: {
          uid: ruid,
          
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          // 14 hours
          expiresIn: 50400000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      //console.log(user);
      // .then(user => console.log(user))
      // .then(res.send(200))
      // .catch(err => console.log("Err", err));
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error RouteU93");
    }
  }
);

module.exports = router;
