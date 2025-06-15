const express = require("express");
const { logIn, signUp } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);

router.get("/profile", verifyToken, (req, res) =>
  res.status(200).json({ user: req.user })
);

module.exports = router;
