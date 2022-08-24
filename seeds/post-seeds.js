const { Post } = require('../models');

const postArray = [
    {
        title: 'Post One',
        content: 'This is the first post created.',
        account_id: 1
    },
    {
        title: 'Post Two',
        content: 'This is the second post created.',
        account_id: 2
    },
    {
        title: 'Post Three',
        content: 'This is the third post created.',
        account_id: 3
    },
    {
        title: 'Post Four',
        content: 'This is the fourth post created.',
        account_id: 4
    },
    {
        title: 'Post Five',
        content: 'This is the fifth post created.',
        account_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postArray);

module.exports = seedPosts;