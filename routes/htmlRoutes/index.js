const express = require("express");
const router = express.Router();
const { User } = require("../../models");

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
  const user = req.session.user;
  const posts = [];
  res.render("dashboard", { user, posts });
});

router.get("/post", (req, res) => {
  res.render("post");
});

router.get("/users", async (req, res) => {
  try {
    const usersData = await User.findAll();
    const users = usersData.map(user => user.get({ plain: true }));
    console.log(users, "Line 31");

    res.render("users", { users });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;

// Path: routes\htmlRoutes\index.js
