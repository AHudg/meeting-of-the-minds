const router = require('express').Router();
const { Account, Post, Comment } = require('../../models');

// back-end request is sent here from controllers>api>index.js

// get all posts at /api/posts
router.get('/', (req, res) => {
    Post.findAll({})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get specific post at /api/posts/id
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','title','content'],
        include: [
            {
                model: Account,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        };

        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add a post at /api/posts
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        account_id: req.body.account_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        };

        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        };

        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;