const express = require("express");
const exphs = require("express-handlebars");
const session = require("express-session");
const controllers = require("./controllers");
const routes = require("./routes");
const path = require("path");

const hbs = exphs.create({});

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2,
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(express.static(__dirname + `/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

app.use(routes);
app.use(controllers);

// Synchronize the Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  // Start the Express server and listen for incoming requests on the specified port
  app.listen(PORT, () => console.log(`Now live on http://localhost:${PORT}`));
});
