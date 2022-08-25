const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creat the Post model
class Post extends Model {

};

// create the fields (columns) for the Post model using .init for the model definition
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    account_id: {
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
    modelName: 'post'
});

module.exports = Post;