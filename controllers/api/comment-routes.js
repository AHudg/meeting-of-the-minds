const router = require('express').Router();
const { Account, Post, Comment } = require('../../models');

// back-end request is sent here from controllers>api>index.js

// get all comments at /api/comments
router.get('/', (req, res) => {
    Comment.findAll({

    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get specific comment at /api/comments/id
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','comment', 'post_id'],
        include: [
            {
                model: Account,
                attributes: ['username'],
            },
            {
                model: Post,
                attributes: ['title']
            }
        ]
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        };

        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add a comment at /api/comments
// COME BACK HERE. YOUR POST_ID IS NOT BEING POSTED. THE DBCOMMENTDATA ONLY RETURNS ID COMMENT AND ACCOUNT ID
router.post('/', (req, res) => {
    Comment.create({
        comment: req.body.comment,
        account_id: req.body.account_id,
        post_id: req.params.post_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No user found with that id.' });
            return;
        };

        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;