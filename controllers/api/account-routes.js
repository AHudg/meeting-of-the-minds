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

router.get('/:id', (req, res) => {
    Account.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbAccountData => res.json(dbAccountData))
    .catch(err => {
        console.log(err);
        res.status(404).json({ message: 'No user found with this id.' });
    });
});

module.exports = router;