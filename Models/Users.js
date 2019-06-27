const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
  uid: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports = User;
