var mongoose = require('./../mongooseDB')

var Tweet = mongoose.Schema({
    name: String,
    account: String
  });
  
  var TweetModel = mongoose.model('Tweet', Tweet);
  module.exports = TweetModel;
