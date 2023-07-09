const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/post", (req, res) => {
  res.render("post");
});


module.exports = router;

// Path: routes\htmlRoutes.js
