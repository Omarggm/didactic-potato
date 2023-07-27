const express = require("express");
const router = express.Router();
const { User } = require("../../models");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/login", async (req, res) => {
  try {
    const usersData = await User.findAll();
    const users = usersData.map((user) => user.get({ plain: true }));
    res.render("login", { users, loggedInUser: req.session.user || null });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/signup", async (req, res) => {
  try {
    const usersData = await User.findAll();
    const users = usersData.map((user) => user.get({ plain: true }));
    res.render("signup", { users, loggedInUser: req.session.user || null });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const usersData = await User.findAll();
    const users = usersData.map((user) => user.get({ plain: true }));
    console.log(users, "Line 31");

    res.render("users", { users });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

// Path: routes\htmlRoutes\index.js
