const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const config = require("config");

const Reqby = require("../Models/Reqby");

//@Route    GET api/reqby
//@Desc     get all reqby
//@Access   Private
//@Status   Working
router.get("/", (req, res) => {
  Reqby.findAll()
    .then(reqbys => {
      //console.log(reqbys);
      res.json(reqbys);
    })
    .catch(err => console.log("err", err));
});

//@Route    POST api/reqby/add
//@Desc     add New reqby
//@Access   Private
//@Status   working
router.post("/add", async (req, res) => {
  const { req_by, phone, contact } = req.body;

  try {
    let reqby = await Reqby.findOne({
      where: { req_by: req.body.req_by }
    });

    if (reqby) {
      return res.status(400).json({ msg: "Requested By Allready exists" });
    }

    Reqby.create({
      req_by,
      phone,
      contact
    });
    res.json(Reqby);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error RouteS93");
  }
});

//@Route    PUT api/reqby/:id
//@Desc     Update reqby
//@Access   Private
//@Status   working
router.put("/:id", auth, (req, res) => {
  //res.send("Update profiles");
  const { req_by, phone, contact } = req.body;

  Reqby.update(
    {
      req_by,
      phone,
      contact
    },
    { where: { id: req.params.id } }
  ).then(reqbys => {
    //console.log(services);
    res.json(reqbys);
  });
});

module.exports = router;
