const { Comment } = require('../models');

const commentArray = [
    {
        comment: 'It is mostly easy, but sometimes it needs the object name vs. not.',
        account_id: 1,
        post_id: 1
    },
    {
        comment: 'One time I had to use {{{blah}}} instead of the usual two! I have no idea why.',
        account_id: 2,
        post_id: 1
    },
    {
        comment: 'Naturally, you need to use three curly brackets when you create the main.handlebars. Is that what you mean?',
        account_id: 3,
        post_id: 1
    },
    {
        comment: 'Wow! I never knew that. Man, I should definitely read the documentation before jumping straight in.',
        account_id: 4,
        post_id: 1
    },
    {
        comment: 'Yeah, documentatoin is your best friend and also your worst enemy!',
        account_id: 5,
        post_id: 1
    },
    {
        comment: 'I concur. The reduced jargon really helps me read code easier.',
        account_id: 1,
        post_id: 2
    },
    {
        comment: 'WHOOP WHOOP! JQUERY: 2 JAVASCRIPT: 0',
        account_id: 2,
        post_id: 2
    },
    {
        comment: 'I can never keep it straight in my head what commands are vanilla js v. JQuery... So I never learned JQuery. JQuery: 2 Javascript: 1',
        account_id: 3,
        post_id: 2
    },
    {
        comment: 'Whoa whoa whoa. As king of JS, I hereby declare JQuery the winner.',
        account_id: 4,
        post_id: 2
    },
    {
        comment: 'Eh, as long as I have sequelize I could care less. I throw my vote to the underdog. JQuery: 3 Javascript: 2',
        account_id: 5,
        post_id: 2
    },
    {
        comment: 'You mean... you do not enjoy having a bazillion things nested and 45 index.js documents?',
        account_id: 1,
        post_id: 3
    },
    {
        comment: 'Lord, do not get me started. I never know if I am on the back-end or the front-end!',
        account_id: 2,
        post_id: 3
    },
    {
        comment: 'I suggest you spend time stepping through the code and understanding how one file hands off to another and such then. Once you understand it should be second nature.',
        account_id: 3,
        post_id: 3
    },
    {
        comment: 'What does that even mean "second nature"? What is first nature to me?',
        account_id: 4,
        post_id: 3
    },
    {
        comment: 'o_O  *crickets*',
        account_id: 5,
        post_id: 3
    },
    {
        comment: 'Hmmm. I just take it step by step- creating one api route and testing it and querying it. Once it all works, I can move on to the next. Bite sized bits!',
        account_id: 1,
        post_id: 4
    },
    {
        comment: 'Wait... you are not using Sequelize.js?',
        account_id: 2,
        post_id: 4
    },
    {
        comment: 'Yeah, definitely download the npm sequelize! It will alleviate any and all headaches hopefully.',
        account_id: 3,
        post_id: 4
    },
    {
        comment: 'How am I just hearing about this now?!?!?! OMG. Thank you all so much for this information!',
        account_id: 4,
        post_id: 4
    },
    {
        comment: 'If you need any help with understanding, definitely check the documentation out first- but if it does not help you feel free to ask questions on the forum!',
        account_id: 5,
        post_id: 4
    },
    {
        comment: 'Wait.... first self-checkouts and now this?!?! Before we know it, AI will do everything and then what do we do?',
        account_id: 1,
        post_id: 5
    },
    {
        comment: 'Sit in VR and look at the upper classes NFTs...',
        account_id: 2,
        post_id: 5
    },
    {
        comment: 'Apparently the role of the programmer now will be proofreading the AI code rather than writing the code yourself.',
        account_id: 3,
        post_id: 5
    },
    {
        comment: 'I understand the need for evolution but this is a mass-extinction of a profession.',
        account_id: 4,
        post_id: 5
    },
    {
        comment: 'Hopefully one day, we humans will learn that trees do not grow to the sky. Words to live by.',
        account_id: 5,
        post_id: 5
    }
]

const seedComments = () => Comment.bulkCreate(commentArray);

module.exports = seedComments;