const express = require('express')
const router = express.Router()
// Initialize using verification token from environment variables
const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);
const twitterClient = require('./twitterClient.js')

var twitterCallParams = {screen_name: 'FictionFone'};
twitterClient.get('statuses/user_timeline', twitterCallParams, function(error, tweets, response) {
 // console.log('trying to recieve tweets');
  if (!error) {
   // console.log('Received tweets');
    for (tweet in tweets) {
      console.log(tweets[tweet].text);
    }
  }
});

router.post('/slack/events', slackEvents.expressMiddleware());

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event)=> {
  if(event.text.indexOf('go') > 0){
     
  }
 // console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

  
module.exports = router;