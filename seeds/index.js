const sequelize = require('../config/connection');

const { User, Blog } = require('../models');

const seedDb = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate([
        {
            username: 'johndoe',
            password: 'password123'
        },
        {
            username: 'janedoe',
            password: 'password123'
        },
        {
            username: 'johnsmith',
            password: 'password123'
        },
        {
            username: 'janesmith',
            password: 'password123'
        },
    ]);

    await Blog.bulkCreate([
        {
            title: 'Blog 1',
            blogContent: 'Blog Content 1',
            userId: 1
        },
        {
            title: 'Blog 2',
            blogContent: 'Blog Content 2',
            userId: 2
        },
        {
            title: 'Blog 3',
            blogContent: 'Blog Content 3',
            userId: 3
        },
        {
            title: 'Blog 4',
            blogContent: 'Blog Content 4',
            userId: 4
        },
    ]);
    process.exit(0);
};

seedDb();