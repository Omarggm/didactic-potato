// Dependencies
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");


// Associations
User.hasMany(Post, {
  foreignKey: "userID",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "userID",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "userID",
});

Comment.belongsTo(User, {
  foreignKey: "userID",
});

Post.hasMany(Comment, {
  foreignKey: "postID",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "postID",
});

module.exports = { User, Post, Comment };
