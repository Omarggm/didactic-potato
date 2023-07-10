const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const controllers = require("./controllers");
const dotenv = require("dotenv");
const sequelize = require("./config/connection");
const hbs = exphbs.create({});

//Load the environment variables from the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//Set up sessions middleware
app.use(
  session({
    secret: "Super secret secret",
    resave: false,
    saveUninitialized: true,
  })
);

//Set up handlebars as the template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Set up routes
app.use(routes);
app.use(controllers);

//Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now live on http://localhost/${PORT}`));
});

// Path: server.js
