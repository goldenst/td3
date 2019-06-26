const Sequelize = require ('sequelize');
const db = require ('../config/db');

const Driver = db.define ('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  
})

module.exports = Driver;