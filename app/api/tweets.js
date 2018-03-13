const express = require('express')
const router = express.Router()

router.use(function timeLog(req,res,next){
    console.log(req.middleWareRequestTime)
    next()
});
router.get('/api/tweets',function (req,res){
    console.log('2')
    res.send('<h1> Get the tweets </h1> : ')
});

module.exports = router;