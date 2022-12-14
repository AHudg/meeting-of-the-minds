const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// creates the Account model
class Account extends Model {
    verifyPassword(passwordInput) {
        return bcrypt.compareSync(passwordInput, this.password);
    }
};

// create fields (columns) for the model using .init for model definition
Account.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        }
    }
},
{
    hooks: {
        async beforeCreate(newAccount) {
            newAccount.password = await bcrypt.hash(newAccount.password, 10);
            return newAccount;
        },
        // async beforeBulkCreate(newAccount) {
        //     newAccount.password = await bcrypt.hash(newAccount.password, 10);
        //     return newAccount;
        // },
        async beforeUpdate(updatedAccount) {
            updatedAccount.password = await bcrypt.hash(updatedAccount.password, 10);
            return updatedAccount;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'account'
});

module.exports = Account;