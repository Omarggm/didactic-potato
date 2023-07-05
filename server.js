// Dependencies
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const helpers = require("./utils");
const session = require("express-session");

const hbs = exphbs.create({ helpers });



// Set up the Express app
const app = express();
const PORT = process.env.PORT || 3002;

// Set up Handlebars as the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Set up sessions
const sessionConfig = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
};

// Middleware
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

// Routes
app.use(routes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
});
