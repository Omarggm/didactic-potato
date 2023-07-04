const Users = require('./Users');
const Posts = require('./Post');
const Comments = require('./Comment');

Users.hasMany(Posts, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
});

Users.hasMany(Comments, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
});

Posts.belongsTo(Users, {
    foreignKey: 'userID',
});

Comments.belongsTo(Users, {
    foreignKey: 'userID',
});

Posts.hasMany(Comments, {
    foreignKey: 'postID',
    onDelete: 'CASCADE',
});

Comments.belongsTo(Posts, {
    foreignKey: 'postID',
});

module.exports = { Users, Posts, Comments };
