const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const config = require("config");

const Customers = require("../Models/Customers");
//const Calls = require("../Models/Calls");
const Employee = require("../Models/Employee");
const Users = require("../Models/Users");
//const Service = require("../Models/Service");
//const Reqby = require("../Models/Reqby");

//@Route    GET api/calls
//@Desc     get all calls
//@Access   Private
//@Status   in progess
router.get("/", auth, (req, res) => {
  Calls.findAll()
    .then(call => {
      console.log(call);
      res.json(call);
    })
    .catch(err => console.log("err", err));
});

//@Route    POST api/calls/add
//@Desc     add New calls
//@Access   Private
//@Status   not started
router.post("/add", auth, async (req, res) => {
  res.send("add calls");
});

module.exports = router;
