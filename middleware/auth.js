const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];

  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    payload = jwt.verify(bearerToken, process.env.JWT_SECRET);
    if (!payload) {
      res.sendStatus(401);
    }
    req.user = payload.user;
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = { verifyToken };
