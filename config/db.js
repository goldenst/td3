const Sequelize = require("sequelize");
// Option 1: Passing parameters separately
module.exports = new Sequelize(
  "dtztjzvd",
  "dtztjzvd",
  "rNeO2d_Lwj7nWNRaY4mYK0HVqJAo3_Us",
  {
    host: "otto.db.elephantsql.com",
    dialect: "postgres",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  }
);