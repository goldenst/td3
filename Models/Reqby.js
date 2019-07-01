const Sequelize = require('sequelize');
const db = require('../config/db');

const Reqbies = db.define('reqby', {
req_by:{
  type: Sequelize.STRING
},
phone: {
  type: Sequelize.STRING
},
contact: {
  type: Sequelize.STRING
}
});

module.exports = Reqbies;
