const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const config = require("config");

const Users = require("../Models/Users");
const Employee = require("../Models/Employee");

//@Route    GET api/employee
//@Desc     get all employees
//@Access   Private
//@Status   Working
router.get("/",  (req, res) => {
  Employee.findAll()
    .then(employee => {
      console.log(employee);
      res.json(employee);
    })
    .catch(err => console.log("err", err));
});

//@Route    POST api/employee
//@Desc     add New employees
//@Access   Private
//@Status   working  need to add check validation
router.post("/add", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const {
    first_name,
    last_name,
    email,
    address,
    city,
    state,
    zip,
    cell_number,
    drivers_licence,
    licence_exp,
    emergency_contact,
    emergency_contact_number,
    emergency_relation,
    tsac,
    tims,
    rspt,
    bat101,
    bat_hybird,
    hire_date,
    is_active,
    leave_date,
    is_admin
  } = req.body;

  try {
    let employee = await Employee.findOne({ where: { email: req.body.email } });

    if (employee) {
      return res.status(400).json({ msg: "User Allready exists" });
    }

    Employee.create({
      first_name,
      last_name,
      email,
      address,
      city,
      state,
      zip,
      cell_number,
      drivers_licence,
      licence_exp,
      emergency_contact,
      emergency_contact_number,
      emergency_relation,
      tsac,
      tims,
      rspt,
      bat101,
      bat_hybird,
      hire_date,
      is_active,
      leave_date,
      is_admin
    });
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error RouteU93");
  }
});

//@Route    PUT api/employee/:id
//@Desc     Update employee
//@Access   Private
//@Status   InComplete  finish prams  route does update
router.put("/:id", auth, (req, res) => {
  //res.send("Update profiles");
  const {
    first_name,
    last_name,
    email,
    address,
    city,
    state,
    zip,
    cell_number,
    drivers_licence,
    licence_exp,
    emergency_contact,
    emergency_contact_number,
    emergency_relation,
    tsac,
    tims,
    rspt,
    bat101,
    bat_hybird,
    hire_date,
    is_active,
    leave_date,
    is_admin
  } = req.body

  Employee.update(
    { 
      first_name,
      last_name,
      email,
      address,
      city,
      state,
      zip,
      cell_number,
      drivers_licence,
      licence_exp,
      emergency_contact,
      emergency_contact_number,
      emergency_relation,
      tsac,
      tims,
      rspt,
      bat101,
      bat_hybird,
      hire_date,
      is_active,
      leave_date,
      is_admin
    },
    { where: { id: req.params.id } }
  )
  .then(employee => {
    console.log(employee);
    res.json(employee);
  });
});

//@Route    DELETE api/employee/:id
//@Desc     DELETE employee
//@Access   Private
//@Status   InComplete
router.delete("/:id", (req, res) => {
  res.send("Delete profiles Not Avalible");
});

module.exports = router;
