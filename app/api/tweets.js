const express = require('express')
var tweetModel = require('./../models/tweetModel')
const router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log(req.middleWareRequestTime)
    next()
});
router.get('/api/tweets', function (req, res) {
    // get all the users
    tweetModel.find({}, function (err, users) {
        if (err) throw err;
     res.json(users)
    });
   
});

module.exports = router;