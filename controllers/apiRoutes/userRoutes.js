const express = require("express");
const router = express.Router();

//Import the model (user.js) to use its database functions.
const { User } = require("../../models");
const { signup, login, logout } = require("../authController");

//Handler for getting all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Handler for getting a specfic user by id
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Handler for creating a new user
router.post("/signup", signup);

//Handler for user login
router.post("/login", login);

//Handler for user logout
router.post("/logout", logout);

//Handler for deleting a user by id
router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;

// Path: controllers\apiRoutes\userRoutes.js
