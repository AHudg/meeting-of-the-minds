const { Comment } = require('../models');

const commentArray = [
    {
        comment: 'I am the first comment',
        user_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the second comment',
        user_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the third comment',
        user_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the fourth comment',
        user_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the fifth comment',
        user_id: 5,
        post_id: 5
    },
    {
        comment: 'I am the sixth comment',
        user_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the seventh comment',
        user_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the eighth comment',
        user_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the ninth comment',
        user_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the tenth comment',
        user_id: 5,
        post_id: 5
    },
    {
        comment: 'I am the eleventh comment',
        user_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the twelfth comment',
        user_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the thirteenth comment',
        user_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the fourteenth comment',
        user_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the fifteenth comment',
        user_id: 5,
        post_id: 5
    },
    {
        comment: 'I am the sixteenth comment',
        user_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the seventeenth comment',
        user_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the eighteenth comment',
        user_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the ninteenth comment',
        user_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the twentieth comment',
        user_id: 5,
        post_id: 5
    }
]

const seedComments = () => Comment.bulkCreate(commentArray);

module.exports = seedComments;