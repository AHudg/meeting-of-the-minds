const { Post } = require('../models');

const postArray = [
    {
        title: 'Templating Terror',
        content: 'I "can" use handlebars, but it only works after trial and error.',
        account_id: 1
    },
    {
        title: 'Javascript v. JQuery: A debate over the vanilla-ness of life.',
        content: 'Let us end this debate once and for all! JQUERY RULEZZZZ!',
        account_id: 2
    },
    {
        title: 'Front-End? Back-End? Middleware? OH MY!',
        content: 'Honestly, does anyone else get crazy confused with all these folders and index.js files and BLAH BLAH when you use the MVC framework?',
        account_id: 3
    },
    {
        title: 'MySQL Misery',
        content: 'I break my brain writing all the queries for my database. Anyone have any tips or tricks?',
        account_id: 4
    },
    {
        title: 'GitHub Copilot: The Beginning of the End',
        content: 'I just read an article over this. Have any of you read up on this?!? We are being replaced!',
        account_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postArray);

module.exports = seedPosts;