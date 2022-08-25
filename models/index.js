const Account = require('./Account');
const Post = require('./Post');
const Comment = require('./Comment');

// Account to Post associations
Account.hasMany(Post, {
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(Account, {
    foreignKey: 'account_id'
});


// Account to Comment associatations
Account.hasMany(Comment, {
    foreignKey: 'account_id'
});

Comment.belongsTo(Account, {
    foreignKey: 'account_id'
});

// Post to Comment associations
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { Account, Post , Comment };