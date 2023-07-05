const sequelize = require("../config/connection");

const { Comment } = require("../models");

const commentData = [
  { text: "Comment 1", userId: 1, postId: 1 },
  { text: "Comment 2", userId: 2, postId: 1 },
  { text: "Comment 3", userId: 3, postId: 2 },
  { text: "Comment 4", userId: 4, postId: 2 },

];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
