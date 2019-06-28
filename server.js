const express = require("express");


const app = express();


// connect to db
const db = require ('./config/db')
//test db
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully to live postgres server.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// Init Middleware
app.use(express.json({ extended: false }))

app.get("/", (req, res) => res.json({ msg: "ServerRunning" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/employee", require("./routes/employee"));
app.use("/api/customers", require("./routes/customer"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
