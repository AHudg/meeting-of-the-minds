const seedAccounts = require('./account-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('---------------');
    await seedAccounts();
    console.log('---------------');
    await seedPosts();
    console.log('---------------');
    await seedComments();

    process.exit(0);
};

seedAll();