const router = require('express').Router();
const { Comment } = require('../../models');

// back-end request is sent here from controllers>api>index.js

// get all comments
router.get('/', (req, res) => {
    Comment.findAll({

    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;