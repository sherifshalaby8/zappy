var mongoose = require('./../mongooseDB')

var Tweet = mongoose.Schema({
    name: {type: String, unique : true, required : true},
    account: String
  });
  
  var TweetModel = mongoose.model('Tweet', Tweet);
  module.exports = TweetModel;
