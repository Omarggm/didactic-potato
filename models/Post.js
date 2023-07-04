const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    
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
           userID: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            freezeTableName: true,
            modelName: 'post',
        }
    );

module.exports = Post;