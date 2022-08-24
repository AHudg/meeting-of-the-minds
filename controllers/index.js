const router = require('express').Router();

// back-end request is sent here from server.js

// access to the api subdirectory
const apiRoutes = require('./api');

// use /api in the url
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;