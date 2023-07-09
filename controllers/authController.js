const bcrypt = require("bcrypt");
const { User } = require("../models");

//Controller function for user signup
async function signup(req, res) {
  try {
    //Extract username and email from request body
    const { username, email } = req.body;

    //Extract password from request body and hash it
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //Create a new user with the extracted data
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    //Redirect to dashboard
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
}

//Controller function for user login
async function login(req, res) {
  try {
    //Extract username and password from request body
    const { username, password } = req.body;

    //Find user with the extracted username
    const user = await User.findOne({ where: { username } });

    //If user is not found, return error message
    if (!user) {
      return res
        .status(404)
        .json({ message: "Incorrect Username or Password" });
    }

    //Compare the extracted password with the hashed password in the database
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    //If password is incorrect, return error message
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ message: "Incorrect Username or Password" });
    }

    //Redirect to dashboard
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong during login", error });
  }
}

//Controller function for user logout
async function logout(req, res) {
  try {
    //Destroy session
    req.session.destroy();

    //Redirect to home page
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong during logout", error });
  }
}

module.exports = { signup, login, logout };



// Path: controllers\authController.js
