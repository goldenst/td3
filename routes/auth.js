const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Users = require("../Models/Users");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//@Route    GET api/auth
//@Desc     get loged in User
//@Access   Private
//@Status   In Complete
router.get("/", (req, res) => {
  res.send("Get loged in User");
});

//@Route    POST api/auth
//@Desc     auth User and Get Token
//@Access   Public
//@Status   In Complete // not getting user id from jwt payload ???? UUID ???? ///////////////////
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await Users.findOne({ where: { email: email } });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.Id
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

      console.log(user.id, user.name, payload )
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error RouteA69");
    }
  }
);

module.exports = router;
