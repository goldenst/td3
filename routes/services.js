const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const config = require("config");

const Services = require("../Models/Services");

//@Route    GET api/services
//@Desc     get all services
//@Access   Private
//@Status   Working
router.get("/", (req, res) => {
  Services.findAll()
    .then(service => {
      //console.log(service);
      res.json(service);
    })
    .catch(err => console.log("err", err));
});

//@Route    POST api/services/add
//@Desc     add New services
//@Access   Private
//@Status   working
router.post("/add", async (req, res) => {
  const { service_type, rate, description } = req.body;

  try {
    let service = await Services.findOne({
      where: { service_type: req.body.service_type }
    });

    if (service) {
      return res.status(400).json({ msg: "Service Allready exists" });
    }

    Services.create({
      service_type,
      rate,
      description
    });
    res.json(Services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error RouteS93");
  }
});

//@Route    PUT api/services/:id
//@Desc     Update services
//@Access   Private
//@Status   working
router.put("/:id", auth, (req, res) => {
  //res.send("Update profiles");
  const { service_type, rate, description } = req.body;

  Services.update(
    {
      service_type,
      rate,
      description
    },
    { where: { id: req.params.id } }
  ).then(services => {
    //console.log(services);
    res.json(services);
  });
});

module.exports = router;
