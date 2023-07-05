const express = require("express");
const router = express.Router();

// Import your route files
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");

// Use the route files as middleware
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;