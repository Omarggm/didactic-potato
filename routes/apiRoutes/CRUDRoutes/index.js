const router = require("express").Router();
const getRoutes = require("./getRoutes.js");
const postRoutes = require("./postRoutes.js");
const deleteRoutes = require("./deleteRoutes.js");

router.use("/", getRoutes);
router.use("/", postRoutes);
router.use("/", deleteRoutes);

module.exports = router;