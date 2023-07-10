const express = require("express");
const router = express.Router();
const { User, Blog  } = require("../../models");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await User.findByPk(userId);
    const user = userData.get({ plain: true });
    res.render("dashboard", user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const usersData = await User.findAll();
    const users = usersData.map((user) => user.get({ plain: true }));
    console.log(users);
    res.render("users", { users });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await User.findByPk(userId);
    const user = userData.get({ plain: true });
    res.render("userProfile", user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/blogPosts", async (req, res) => {
try {
  const blogData = await Blog.findAll();
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  console.log(blogs);
  res.render("blogPosts", { blogs });
} catch (error) {
  res.status(500).json(error);
}
});

router.get("/blogPosts/:blogPostId", async (req, res) => {
  try {
    const { blogId } = req.params;
    const blogData = await Blog.findByPk(blogId);
    const blog = blogData.get({ plain: true });
    res.render("blogPost", blog);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

// Path: routes\htmlRoutes\index.js
