const router = require('express').Router();

const accountRoutes = require('./account-routes');

router.use('/accounts', accountRoutes);

module.exports = router;