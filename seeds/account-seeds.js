const { Account } = require('../models');
const { bulkCreate } = require('../models/Account');

const accountArray = [
    {
        username: 'EngineeringNerd22',
        email: 'johndoe@email.com',
        password: 'supersecretpassword'
    },
    {
        username: 'SoftwareFanatic00',
        email: 'janedoe@email.com',
        password: 'supersecretpassword'
    },
    {
        username: 'htmlHero',
        email: 'juliandoe@email.com',
        password: 'supersecretpassword'
    },
    {
        username: 'JavascriptJunkie',
        email: 'joedoe@email.com',
        password: 'supersecretpassword'
    },
    {
        username: 'MysqlMisfit',
        email: 'juliedoe@email.com',
        password: 'supersecretpassword'
    }
];

const seedAccounts = () => Account.bulkCreate(accountArray);

module.exports = seedAccounts;