const Sequelize = require('sequelize');
const db = require('../config/db');

const Customers = db.define('customers', {
  name: {
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
  email: {
    type: Sequelize.STRING
  },
  aaa_membership: {
    type: Sequelize.STRING
  }
  
});

module.exports = Customers;
