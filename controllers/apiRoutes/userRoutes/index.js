const router = require("express").Router();
const bycrypt = require("bcrypt");
const { User } = require("../../../models");

router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    const existingUser = await User.findAll({
      where: {
        username: userData.username,
      },
    });
    if (existingUser.email === userData.email) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const hashedPassword = await bycrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const newUser = await User.create(userData);
    req.session.save(() => {
      req.session.user = newUser.get({ plain: true });
      req.session.loggedIn = true;
      res.status(200).json(newUser);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!userData) {
            res.status(400).json({ message: "Incorrect username or password, please try again" });
            return;
        }
        const validPassword = await bycrypt.compare(req.body.password, userData.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect username or password, please try again" });
            return;
        }
        req.session.save(() => {
            req.session.user = userData.get({ plain: true });
            req.session.loggedIn = true;
            res.status(200).json({ user: userData, message: "You are now logged in!" });
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.status(204).end();
    });
});

module.exports = router;
