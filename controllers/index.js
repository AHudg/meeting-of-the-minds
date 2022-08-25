const router = require('express').Router();

// back-end request is sent here from server.js

// access to the api subdirectory
const apiRoutes = require('./api');
const landingRoutes = require('./landing-routes');

// uses localhost:PORT/api in the url
router.use('/api', apiRoutes);
// uses localhost:PORT/
router.use('/', landingRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;