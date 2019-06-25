const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "ServerRunning" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profiles", require("./routes/profiles"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
