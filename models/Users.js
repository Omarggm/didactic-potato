const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'users',
    }
        
);

module.exports = Users;