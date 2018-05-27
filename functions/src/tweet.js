const Twitter = require('twitter')

const TwitterClient = Twitter({
  consumer_key: 'Vp7mlp4O2scbrR3NLN3NMFWKK',
  consumer_secret: 'WIZi5eaiWU4uR8rEtxgQlND9MiVncoL1LeVsaNFaEfdHvYwQC0',
  access_token_key: '77771373-pxhXbgffCKBfxdwakbsADGPallccBxqNzpowR4aRl',
  access_token_secret: 'UbBeW16bR0jo1QBzgkJgJ6iX4RjyhVVbFWfigqqBbImU4'
})

var params = {screen_name: 'kamescg'};
TwitterClient.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });