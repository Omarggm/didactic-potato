const express = require("express");
const router = express.Router();

const apiRoutes = require("./apiRoutes");
const { signup, login, logout } = require("./authController")

router.use("/api", apiRoutes);
router.post("/auth/signup", signup);
router.post("/auth/login", login);
router.get("/auth/logout", logout);

module.exports = router;

// Path: controllers\index.js