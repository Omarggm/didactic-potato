const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'TECH_BLOG_DB',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql',
        
    }
);

module.exports = sequelize;