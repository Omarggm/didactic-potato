const router = require("express").Router();
const { Post, User, Comment } = require("../../../models");

// Route for rendering the signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Route for rendering the login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Route for user logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("signup");
});

// Route for retrieving all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [User] });
    res.render("homepage", { posts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Route for retrieving a specific post by ID
router.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, { include: [Comment] });
    if (!post) {
      return res.status(404).send("Post not found");
    } else {
      res.render("post", { post });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
