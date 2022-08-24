const router = require('express').Router();
const { Post } = require('../../models');

// back-end request is sent here from controllers>api>index.js

// get all posts
router.get('/', (req, res) => {
    Post.findAll({

    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;