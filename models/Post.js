const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init (
    {
        title: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;