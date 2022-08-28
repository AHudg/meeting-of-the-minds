const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates the Comment model
class Comment extends Model {

};

// create fields (columns) for the model using .init for model definition
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    },    account_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'account',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

module.exports = Comment;