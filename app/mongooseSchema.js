var mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// parse application/json
db.once('open', function () {
  console.log('connected');
});

var Tweet = mongoose.Schema({
  name: String,
  account: String
});

var Tweet = mongoose.model('Tweet', Tweet);
var  FictionFoneTweet= new Tweet({ name: 'Some tweet', account: 'FictionFone.' });

FictionFoneTweet.save(function (err, FictionFoneTweet) {
  if (err) return console.error(err);
 console.log(FictionFoneTweet.name+' From Account called '+FictionFoneTweet.account);
});
module.exports = db;