const Sequelize = require('sequelize');
const db = require('../config/db');

const Services = db.define('services', {
service_type:{
  type: Sequelize.STRING
},
rate: {
  type: Sequelize.DECIMAL(6,2)
},
description: {
  type: Sequelize.STRING
}
});

module.exports = Services;
