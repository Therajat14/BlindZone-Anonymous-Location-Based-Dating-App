const jwt = require("jsonwebtoken");

// Get the secret key from environment variables
const getSecret = () => {
  const key = process.env.JWT_SECRET_KEY;
  if (!key)
    throw new Error("JWT_SECRET_KEY is missing in environment variables");
  return key;
};

// Create a JWT token with 1 hour expiry
const jwtSign = (payload) => {
  return jwt.sign(payload, getSecret(), { expiresIn: 1000 * 60 * 5 });
};

// Verify the token and return the decoded data
const jwtVerify = (token) => {
  try {
    return jwt.verify(token, getSecret());
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return null;
  }
};

// Decode the token without verifying
const jwtDecode = (token) => jwt.decode(token);

module.exports = {
  jwtSign,
  jwtVerify,
  jwtDecode,
};
