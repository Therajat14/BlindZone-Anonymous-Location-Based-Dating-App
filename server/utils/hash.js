const bcrypt = require("bcrypt");

// Set salt rounds (default to 10 if not set in .env)
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

// Hash a password using bcrypt
const generateHash = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

// Compare a plain password with a hashed one
const verifyHash = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Export the functions
module.exports = { generateHash, verifyHash };
