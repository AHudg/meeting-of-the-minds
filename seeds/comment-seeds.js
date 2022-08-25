const { Comment } = require('../models');

const commentArray = [
    {
        comment: 'I am the first comment',
        account_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the second comment',
        account_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the third comment',
        account_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the fourth comment',
        account_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the fifth comment',
        account_id: 5,
        post_id: 5
    },
    {
        comment: 'I am the sixth comment',
        account_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the seventh comment',
        account_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the eighth comment',
        account_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the ninth comment',
        account_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the tenth comment',
        account_id: 5,
        post_id: 5
    },
    {
        comment: 'I am the eleventh comment',
        account_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the twelfth comment',
        account_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the thirteenth comment',
        account_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the fourteenth comment',
        account_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the fifteenth comment',
        account_id: 5,
        post_id: 5
    },
    {
        comment: 'I am the sixteenth comment',
        account_id: 1,
        post_id: 1
    },
    {
        comment: 'I am the seventeenth comment',
        account_id: 2,
        post_id: 2
    },
    {
        comment: 'I am the eighteenth comment',
        account_id: 3,
        post_id: 3
    },
    {
        comment: 'I am the ninteenth comment',
        account_id: 4,
        post_id: 4
    },
    {
        comment: 'I am the twentieth comment',
        account_id: 5,
        post_id: 5
    }
]

const seedComments = () => Comment.bulkCreate(commentArray);

module.exports = seedComments;