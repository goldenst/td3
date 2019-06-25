const express = require("express");
const Sequelize = require("sequelize");

const app = express();

// Option 1: Passing parameters separately
const db = new Sequelize("defaultdb", "jwelch", "vc36kby189qbl403", {
  host: "db-postgresql-nyc3-79966-do-user-6282198-0.db.ondigitalocean.com",
  dialect: "postgres",
  port: 25060,
  ssl: true
 
});

//test db
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get("/", (req, res) => res.json({ msg: "ServerRunning" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profiles", require("./routes/profiles"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
