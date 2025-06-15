const { jwtVerify } = require("../utils/jwt");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ msg: "Access Denied" });

  try {
    const decoded = jwtVerify(token);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(404).json({ msg: "User not found" });
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid Token",
    });
  }
};

module.exports = verifyToken;
