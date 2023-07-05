const router = require("express").Router();
const { Post, User, Comment } = require("../../../models");

// Route for deleting a post
router.delete("/post/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).send("Post not found");
    } else {
      await post.destroy();
      res.json(post);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
