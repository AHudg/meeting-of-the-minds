const router = require('express').Router();
const sequelize = require('../config/connection');
const { Account, Post, Comment } = require('../models');
const authenticate = require('../utils/authenticate');

router.get('/', authenticate, (req, res) => {
    Post.findAll({
        where: {
            account_id: req.session.account_id
        },
        order: [['created_at', 'DESC']],
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
        console.log(posts)
        // res.render accepts a second argument of an object containing the data you want to display in the template
        res.render('profile', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', authenticate, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','title','content','created_at'],
        include: {
            model: Account,
            attributes: ['username']
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }

        const posts = dbPostData.get({ plain: true });

        res.render('edit-post', { posts, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;