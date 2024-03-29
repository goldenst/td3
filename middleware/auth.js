const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // get token from header
  const token = req.header("x-auth-token");

  // check if invalid token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
   
    req.user = decoded.user;

    console.log('req user',req.user, decoded.user, "next")

    next();
  } catch (err) {
    console.log(err)
    res.status(401).json({ msg: "token is not valid" });
  }
};

// wtf 