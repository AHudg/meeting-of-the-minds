const router = require('express').Router();
const { Account, Post, Comment} = require('../../models');

// back-end request is sent here from controllers>api>index.js

// get all accounts at /api/accounts
router.get('/', (req, res) => {
    Account.findAll({
        attributes: {
             exclude: ['password'] 
        }
    })
    .then(dbAccountData => res.json(dbAccountData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get specific account at /api/accounts/id
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    Account.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['title']
            },
            {
                model: Comment,
                attributes: ['comment']
            }
        ]
    })
    .then(dbAccountData => {
        if (!dbAccountData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return
        };

        res.json(dbAccountData)})
    .catch(err => {
        console.log(err);
        res.status(404).json({ message: 'No user found with this id.' });
    });
});

// create account at api/accounts
router.post('/', (req, res) => {
    Account.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbAccountData => {
        res.json(dbAccountData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update an account at /api/accounts/id
router.put('/:id', (req, res) => {
    Account.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbAccountData => {
        if (!dbAccountData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        };

        res.json(dbAccountData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete an account at /api/accounts/id
router.delete('/:id', (req, res) => {
    Account.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbAccountData => {
        if (!dbAccountData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        };

        res.json(dbAccountData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;