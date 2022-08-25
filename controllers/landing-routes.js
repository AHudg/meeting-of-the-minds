const router = require('express').Router();
const sequelize = require('../config/connection');
const { Account, Post, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: Account,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        // serializes the data and
        // returns an array of each post object w/ properties of id, title, content, and account: { username: 'user' }
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // res.render accepts a second argument of an object containing the data you want to display in the template
        res.render('landingpage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;