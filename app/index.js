require('dotenv').config()
var db = require('./mongooseSchema')
const express = require('express'),
 app = express(),  
 bodyParser = require('body-parser'), slackListener = require('./slackListener.js')
 , mainRouter = require('./mainRouter.js')
app.use(bodyParser.json())
 
app.use(slackListener)
app.use(mainRouter)
module.exports = app