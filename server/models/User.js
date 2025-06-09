const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  // Email field - required and must be unique
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no two users can have the same email
  },

  // Password field - required
  password: {
    type: String,
    required: true,
  },
});

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

// Export the model for use in other files
module.exports = User;
