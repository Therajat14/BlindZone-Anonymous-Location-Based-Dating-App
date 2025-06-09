const { generateHash, verifyHash } = require("../utils/hash");
const User = require("../models/User");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({
    email,
    password: await generateHash(password),
  });

  user.save().then((response) => res.status(201).json(response));
};

const logIn = (req, res) => {
  res.send("hi there from login HWHEHE");
};

module.exports = { logIn, signUp };
