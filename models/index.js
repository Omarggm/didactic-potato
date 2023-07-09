const Post = require("./post");
const User = require("./user");

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Post.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { Post, User };


// Path: models\index.js
