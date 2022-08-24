const router = require('express').Router();
const { Account } = require('../../models');

router.get('/', (req, res) => {
    console.log('GET');
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