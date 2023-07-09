const express = require("express");
const router = express.Router();

const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);

module.exports = router;

// Path: controller\apiRoutes\index.js
