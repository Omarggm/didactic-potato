const sequelize = require('../config/connection');

const { User } = require('../models');

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
    process.exit(0);
};

seedDb();