const express = require('express')
const router = express.Router()

router.use(function timeLog(req,res,next){
   
    console.log(req.middleWareRequestTime)
    next()
});
router.get('/',function (req,res){

    console.log('2')
    res.send('<h1>Home page </h1> : ')
 
});
router.get('/about',function (req,res){
    console.log('2')
    res.send('<h1>about page </h1>')
 
});

module.exports = router;