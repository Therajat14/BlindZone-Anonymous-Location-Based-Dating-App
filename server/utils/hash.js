const bcrypt = require("bcrypt");

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

const generateHash = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

const verifyHash = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { generateHash, verifyHash };
