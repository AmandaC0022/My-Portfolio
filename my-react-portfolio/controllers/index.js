const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const addHashtagRoutes = require("./views/addHashtagRoutes");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// this uses the file addHashtagRoutes.js for all queries pointed at /addHashtag
router.use("/addHashtag", addHashtagRoutes);

module.exports = router;
