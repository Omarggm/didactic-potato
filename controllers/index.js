const express = require("express");
const router = express.Router();

const apiRoutes = require("./apiRoutes");
const authController = require("./authController")

router.use("/api", apiRoutes);
router.use("/auth", authController);

module.exports = router;

// Path: routes\index.js