const sequelize = require("../config/connection");

const { Post } = require("../models");

const postData = [
  { title: "Post 1", content: "This is the content of post 1", userId: 1 },
  { title: "Post 2", content: "This is the content of post 2", userId: 2 },
  { title: "Post 3", content: "This is the content of post 3", userId: 3 },
  { title: "Post 4", content: "This is the content of post 4", userId: 4 },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
