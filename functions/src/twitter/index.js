const Twitter = require('twitter')
const functions = require('firebase-functions')

const configuration = functions.config()
const twitterConsumerKey = configuration.twitter.consumer_key
const twitterConsumerSecret = configuration.twitter.consumer_secret
/**
 * Client | Twitter
 * @desc Initialize the Twitter Client object to communicate with the Twitter API
 */
export default new Twitter({
  consumer_key: twitterConsumerKey,
  consumer_secret: twitterConsumerSecret
})
