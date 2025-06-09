const { response } = require("express");
const jwt = require("jsonwebtoken");

// Make sure the secret is present
if (!process.env.JWT_SECRET_KEY) {
  throw new Error("JWT_SECRET_KEY is missing in environment variables");
}

// Sign a JWT with a 1 hour expiration
const jwtSign = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

// Safe version — returns null instead of crashing
const jwtVerify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.log(err);
  }
};

// Decode JWT without verifying signature (use with caution)
const jwtDecode = (token) => jwt.decode(token);

module.exports = {
  jwtSign,
  jwtVerify,
  jwtDecode,
};
