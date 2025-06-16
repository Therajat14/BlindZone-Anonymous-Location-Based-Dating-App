const { generateHash, verifyHash } = require("../utils/hash");
const User = require("../models/User");
const { jwtSign } = require("../utils/jwt");

// Sign up a new user
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({ message: "Email already exists" });
    }

    // Hash the password and create new user
    const hashedPassword = await generateHash(password);
    const user = new User({ email, password: hashedPassword });
    const savedUser = await user.save();

    // Generate JWT token
    const jwtToken = jwtSign({ id: savedUser._id, email: savedUser.email });

    // Send success response
    res.status(201).json({
      user: {
        id: "12345",
        email: "test@example.com",
        displayName: "Test User",
        isAnonymous: true,
      },
      message: "User registered successfully",
      token: jwtToken,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Log in existing user
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const isEmailExist = await User.findOne({ email });
    if (!isEmailExist) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isMatch = await verifyHash(password, isEmailExist.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const jwtToken = jwtSign({
      id: isEmailExist._id,
      email: isEmailExist.email,
    });

    // Send success response
    res.status(200).json({
      message: "Login successful",
      token: jwtToken,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Export functions
module.exports = { logIn, signUp };
