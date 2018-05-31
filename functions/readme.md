# Firebase Functions


## Environment Variables

The BuidlBox Cloud Functions utilize environment variables to minimize exposure of private signing keys. Additionally, it prevents developers from having to change project variables in the code.

### uPort 
```
firebase functions:config:set uport.appname=APPNAME uport.simplesigner=SIMPLESIGNER uport.address=ADDRESS
``` 

### Twitter
```
firebase functions:config:set twitter.consumer_key= twitter.consumer_secret= 
``` 