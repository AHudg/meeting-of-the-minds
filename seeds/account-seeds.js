const { Account } = require('../models');
const sequelize = require('../config/connection');

const accountarray = [
    {
        username: 'andrew',
        email: 'andrew@me.com',
        password: 'andrew'
    },
    {
        username: 'collin',
        email: 'collin@me.com',
        password: 'collin'
    },
    {
        username: 'emorie',
        email: 'emorie@me.com',
        password: 'emorie'
    },
    {
        username: 'taylor',
        email: 'taylor@me.com',
        password: 'taylor'
    },
    {
        username: 'amando',
        email: 'amando@me.com',
        password: 'amando'
    }
];

const seedAccounts = () => Account.bulkCreate(accountarray);

module.exports = seedAccounts;