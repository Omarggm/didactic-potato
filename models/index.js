const Blog = require("./blog");
const User = require("./user");

User.hasMany(Blog, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  Blog,
  User,
};

// Path: models\index.js
