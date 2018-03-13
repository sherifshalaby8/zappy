require('dotenv').config()
const express = require('express'),
 app = express(),  
 bodyParser = require('body-parser'), slackListener = require('./slackListener.js')
 , tweetsApi = require('./api/tweets')
app.use(bodyParser.json())
app.use(slackListener)
app.use(tweetsApi)
module.exports = app