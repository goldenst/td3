const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const config = require("config");

const Customers = require("../Models/Customers");

//@Route    GET api/customers
//@Desc     get all customers
//@Access   Private
//@Status   Working
router.get("/", auth, (req, res) => {
  Customers.findAll()
    .then(customer => {
      console.log(customer);
      res.json(customer);
    })
    .catch(err => console.log("err", err));
});

//@Route    POST api/customer/add
//@Desc     add New customer
//@Access   Private
//@Status   working  need to add check validation
router.post("/add", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const {
    name,
    address,
    city,
    state,
    zip,
    cell_number,
    email,
    aaa_membership
  } = req.body;

  try {
    let customer = await Customers.findOne({
      where: { cell_number: req.body.email }
    });

    if (customer) {
      return res.status(400).json({ msg: "Customer Allready exists" });
    }

    Customers.create({
      name,
      address,
      city,
      state,
      zip,
      cell_number,
      email,
      aaa_membership
    });
    res.json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error RouteU93");
  }
});

module.exports = router;
