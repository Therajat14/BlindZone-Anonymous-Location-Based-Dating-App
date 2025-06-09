const jwt = require("jsonwebtoken");

const jwtSign = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

const jwtVerify = (token) => jwt.verify(token, process.env.JWT_SECRET_KEY);

module.exports = { jwtSign, jwtVerify };
