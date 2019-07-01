const Sequelize = require('sequelize');
const db = require('../config/db');

const Calls = db.define('calls', {
 aaa_call_number: {
   type: Sequelize.STRING
 },
 location: {
   type: Sequelize.STRING
 },
 destination: {
   type: Sequelize.STRING
 },
 year: {
   type: Sequelize.STRING
 },
 make: {
   type: Sequelize.STRING
 },
 model: {
   type: Sequelize.STRING
 },
 color: {
   type: Sequelize.STRING
 },
 licence: {
   type: Sequelize.STRING
 },
 state: {
   type: Sequelize.STRING
 },
 vin: {
   type: Sequelize.STRING
 },
 Service_performed: {
   type: Sequelize.STRING
 },
 mtv: {
   type: Sequelize.STRING
 },
 tow_miles: {
   type: Sequelize.STRING
 },
 tos: {
   type: Sequelize.STRING
 },
 notes: {
   type: Sequelize.STRING
 }
});

module.exports = Calls;
