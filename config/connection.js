// Import the Sequelize constructor from the library
const { Sequelize } = require('sequelize');

// Create an instance of Sequelize to use its features
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