const router = require('express').Router();
const { Account, Post, Comment} = require('../../models');
const authenticate = require('../../utils/authenticate');

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
        req.session.save(() => {
            req.session.account_id = dbAccountData.id;
            req.session.username = dbAccountData.username;
            req.session.loggedIn = true;

            res.json(dbAccountData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// used to log the user into the server session
router.post('/login', (req, res) => {
    Account.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbAccountData => {
        if (!dbAccountData) {
            res.status(400).json({ message: 'Username or password are incorrect.' });
            return;
        }
        console.log(dbAccountData);
        const isPassword = dbAccountData.verifyPassword(req.body.password);
        console.log(isPassword);

        if (!isPassword) {
            res.status(400).json({ message: 'Username or password are incorrect.' });
            return;
        }

        req.session.save(() => {
            req.session.account_id = dbAccountData.id;
            req.session.username = dbAccountData.username;
            req.session.loggedIn = true;

            res.json({ user: dbAccountData, message: 'You are logged in!' });
        });
    });
});

// used to log the user out of the server session
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// update an account at /api/accounts/id
router.put('/:id', authenticate, (req, res) => {
    Account.update(req.body, {
        individualHooks: true,
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
router.delete('/:id', authenticate, (req, res) => {
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