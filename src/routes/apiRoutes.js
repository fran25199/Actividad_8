const router = require('express').Router();

router.use('/post', require('./api/apiPostRoutes'));
router.use('/autor', require('./api/apiAutorRoutes'));

module.exports = router; 