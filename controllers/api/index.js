const router = require('express').Router();

// back-end request is sent here from controllers>index.js

// access to the route folders
const accountRoutes = require('./account-routes');
const postRoutes = require('./post-routes');

// instructs url to use /accounts when using account-routes.js
router.use('/accounts', accountRoutes);
// uses /posts when using post-routes.js
router.use('/posts', postRoutes);

module.exports = router;