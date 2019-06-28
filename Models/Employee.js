const Sequelize = require("sequelize");
const db = require("../config/db");

const Employee = db.define("employee", {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING
  },
  cell_number: {
    type: Sequelize.STRING
  },
  drivers_licence: {
    type: Sequelize.STRING
  },
  licence_exp: {
    type: Sequelize.STRING
  },
  emergency_contact: {
    type: Sequelize.STRING
  },
  emergency_contact_number: {
    type: Sequelize.STRING
  },
  emergency_relation: {
    type: Sequelize.STRING
  },
  tsac: {
    type: Sequelize.DATE
  },
  tims: {
    type: Sequelize.DATE
  },
  rspt: {
    type: Sequelize.DATE
  },
  bat101: {
    type: Sequelize.DATE
  },
  bat_hybird: {
    type: Sequelize.DATE
  },
  hire_date: {
    type: Sequelize.DATE
  },
  is_active: {
    type: Sequelize.BOOLEAN
  },
  leave_date: {
    type: Sequelize.DATE
  },
  is_admin: {
    type: Sequelize.BOOLEAN
  }
});

module.exports = Employee;
