const express = require("express");
const router = express.Router();

//Import the model (post.js) to use its database functions.
const { Post } = require("../../models");

//Handler for getting all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Handler for getting a specfic post by id
router.get("/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Handler for creating a new post
router.post("/", async (req, res) => {
  const { title, content, user_id } = req.body;
  try {
    const newPost = await Post.create({
      title,
      content,
      user_id,
    });
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Handler for updating a post by id
router.put("/:id", async (req, res) => {
  const postId = req.params.id;
  const { title, content, user_id } = req.body;
  try {
    const post = await Post.findByPk(postId);
    if (post) {
      const updatedPost = await Post.update(
        {
          title,
          content,
          user_id,
        },
        {
          where: {
            id: postId,
          },
        }
      );
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Handler for deleting a post by id
router.delete("/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    if (post) {
      const deletedPost = await Post.destroy({
        where: {
          id: postId,
        },
      });
      res.status(200).json(deletedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;

// Path: controllers\apiRoutes\postRoutes.js
