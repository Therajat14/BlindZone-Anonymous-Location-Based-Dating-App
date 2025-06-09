const { generateHash } = require("../utils/hash");
const User = require("../models/User");
const { jwtSign } = require("../utils/jwt");

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        msg: "Email already exists",
      });
    }

    // Create new user
    const hashedPassword = await generateHash(password);
    const user = new User({ email, password: hashedPassword });
    const savedUser = await user.save();

    // Generate JWT after saving, optionally include _id
    const jwtToken = jwtSign({ id: savedUser._id, email: savedUser.email });

    res.status(201).json({
      msg: "User created successfully",
      jwtToken,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

const logIn = (req, res) => {
  res.send("hi there from login HWHEHE");
};

module.exports = { logIn, signUp };
