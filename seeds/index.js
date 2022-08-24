const seedAccounts = require('./account-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('---------------');
    await seedAccounts();

    process.exit(0);
};

seedAll();