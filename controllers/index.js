const express = require("express");
const router = express.Router();

const apiRoutes = require("./apiRoutes");

router.use("/api", apiRoutes);

module.exports = router;

// Path: routes\index.js