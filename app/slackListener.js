const express = require('express')
const router = express.Router()
// Initialize using verification token from environment variables
const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);
const twitterClient = require('./twitterClient.js')
var TweetModel = require('./models/tweetModel')
router.post('/slack/events', slackEvents.expressMiddleware());

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event) => {
  if (event.text.indexOf('go') > -1) {
    var twitterCallParams = { screen_name: 'FictionFone' };
    twitterClient.get('statuses/user_timeline', twitterCallParams, function (error, tweets, response) {
      if (!error) {
        for (tweet in tweets) {
          var FictionFoneTweet = new TweetModel({ name: tweets[tweet].text, account: tweets[tweet].user.screen_name });
          FictionFoneTweet.save(function (err, FictionFoneTweet) {
            if (err) return console.error(err);
          });

        }
      } else {
        console.log(error);
      }
    });

  }
});
console.log('Listening to slack events');
// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);
module.exports = router;