const express = require("express");
const { logIn, signUp } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");
const { getProfile } = require("../controllers/profileControlller");
const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);

router.get("/profile", verifyToken, getProfile);

module.exports = router;
