const express = require("express");
const router = express.Router();

// Import your route files
const CRUDRoutes = require("./CRUDRoutes");

// Use the route files as middleware
router.use("/", CRUDRoutes);

module.exports = router;
