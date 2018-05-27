const Twitter = require('twitter')
const functions = require('firebase-functions')

const configuration = functions.config()
const twitterConsumerKey = configuration.twitter.consumer_key
const twitterConsumerSecret = configuration.twitter.consumer_secret
// const twitterTokenKey = configuration.twitter.token_key
// const twitterTokenSecret = configuration.twitter.token_secret

console.log(twitterConsumerKey)
console.log(twitterConsumerSecret)

export default new Twitter({
  consumer_key: 'Vp7mlp4O2scbrR3NLN3NMFWKK',
  consumer_secret: 'WIZi5eaiWU4uR8rEtxgQlND9MiVncoL1LeVsaNFaEfdHvYwQC0',
  access_token_key: '77771373-pnpgAkIaeR5oIAESR9qWCh30SzaQynQZcWuAqAIMf',
  access_token_secret: '7tgwHndPdQ7NbjPwm0PltTbrk3rZpxp3rlFn50B8Ewi5I'
})