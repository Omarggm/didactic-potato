const router = require("express").Router();
const { Post, User, Comment } = require("../../../models");

// User registration route
router.post("/user", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Generate a salt to be used for password hashing
    const salt = await bcrypt.genSalt(10);
    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = await User.create({ username, password: hashedPassword });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;
    });

    // Send the response with the user's data
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// User login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user who matches the provided username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      // User not found, render login page with error message
      return res.render("login", { error: "Invalid username or password" });
    } else {
      // Compare the provided password with the hashed password stored in the database
      const passwordsMatch = await bcrypt.compare(password, user.password);
      if (passwordsMatch) {
        // Set the user ID in the session and redirect to the dashboard
        req.session.userId = user.id;
        res.redirect("/dashboard");
      } else {
        // Passwords don't match, render login page with error message
        res.render("login", { error: "Invalid username or password" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Route for posting a new post
router.post("/post", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({
      title,
      content,
      userId: req.session.userId,
    });
    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route for adding a comment to a post
router.post("/post/:id/comment", async (req, res) => {
  try {
    const { content } = req.body;
    await Comment.create({
      content,
      postId: req.params.id,
      userId: req.session.userId,
    });
    res.redirect(`/post/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
