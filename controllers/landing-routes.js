const router = require('express').Router();
const sequelize = require('../config/connection');
const { Account, Post, Comment } = require('../models');
const authenticate = require('../utils/authenticate');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Account,
                attributes: ['username']
            },
            {
                model: Comment,
                attribute: ['id','content','account_id','post_id','created_at'],
                include: {
                    model: Account,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        // serializes the data and
        // returns an array of each post object w/ properties of id, title, content, and account: { username: 'user' }
        const posts = dbPostData.map(post => post.get({ plain: true }));

        if (req.session.account_id) {
            res.render('landingpage', { posts, loggedIn: true});
        } else {
            // res.render accepts a second argument of an object containing the data you want to display in the template
            res.render('landingpage', { posts });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/post/:id', authenticate, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','title','content','created_at'],
        include: [
            {
                model: Account,
                attributes: ['username']
            },
            {
                model: Comment,
                attribute: ['id','content','account_id','post_id','created_at'],
                include: {
                    model: Account,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }

        const post = dbPostData.get({ plain: true });

        res.render('view-post', { post, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;