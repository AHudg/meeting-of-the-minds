const router = require('express').Router();
const { Account } = require('../../models');

// back-end request is sent here from controllers>api>index.js

// get all accounts
router.get('/', (req, res) => {
    Account.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbAccountData => res.json(dbAccountData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;