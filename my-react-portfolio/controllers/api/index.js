const router = require('express').Router();
const hashtagRoutes = require("./hashtagRoutes");
const collectiontagRoutes = require("./collectiontagRoutes");

router.use("/hashtags", hashtagRoutes);
router.use("/collectiontags", collectiontagRoutes);

module.exports = router;
