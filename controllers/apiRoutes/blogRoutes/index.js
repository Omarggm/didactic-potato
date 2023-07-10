const router = require("express").Router();
const { Blog } = require("../../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const blogData = await Blog.create(req.body);
    res.json({ blogData, message: "Blog created!" });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
