var mongoose = require('./../mongooseDB')

var Tweet = mongoose.Schema({
    name: {type: String},
    account: String
  });
  
  var TweetModel = mongoose.model('Tweet', Tweet);
  module.exports = TweetModel;
