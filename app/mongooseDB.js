var mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// parse application/json
db.once('open', function () {
  console.log('connected to mongodb');
});
module.exports = mongoose;
