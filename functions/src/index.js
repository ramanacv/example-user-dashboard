/* ------------------------ Node.js Dependencies ------------------------ */
const URL = require('url-parse');
/* ------------------------ External Dependencies ------------------------ */
const uport = require('uport');
const uuid = require('uuid/v1');
const ethers = require('ethers');
const express =  require('express');
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const cors = require('cors')({origin: true});
/* ------------------------- Internal Dependencies -------------------------- */
const database = require('./database');

// Constants
const Credentials = uport.Credentials;
const SimpleSigner = uport.SimpleSigner;
const serviceAccount = require('../secrets/service_account.json')
const databaseURL = "https://buidlbox-dev.firebaseio.com"

/**
 * uPort | Simple Signer
 * 
 * The SimpleSigner key is reponsible for verifying decentralized applications.
 * In producion please add the SimpleSigner key as an envrionment variable.
 * 
 * Example: firebase functions:config:set uport.simpleSigner='INSERT_KEY'  
 */
// const uportSimpleSigner = functions.config().uport.simplesigner;
const uportSimpleSigner = SimpleSigner('d12d8a5c643ab7facc0a1815807aba1bed174762a2061b6b098b7bffd7462236')
const uportCredentials = new Credentials({
  appName: 'Eidenai',
  address: '2oo7fQjxR44MnKa8n4XKDZBBa2Buty4qrug',
  signer: uportSimpleSigner,
  networks: {'0x4': {'registry' : '0x2cc31912b2b0f3075a87b3640923d45a26cef3ee', 'rpcUrl' : 'https://rinkeby.infura.io'}}
})

/* ------------------------ Initialize Dependencies ------------------------- */
/**
 * Firebase - Administrator Initialization
 */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
});
const firestore = admin.firestore();

/* -------------------------------------------------------------------------- */

/* ------------------------ Firebase Cloud Functions ------------------------ */

/* -------------------------------------------------------------------------- */

/*---*---------------              ---------------*---* 

                  Identity Authentication

/*---*---------------              ---------------*---*/
exports.identity = functions.https.onRequest((request,response)=> {
  cors(request, response, () => {
    const JWT = request.body.JWT
    uportCredentials.receive(JWT)
    .then(profile => {
      if(profile.name) admin.auth().updateUser(profile.address,{
        displayName: profile.name
      })
      if(profile.avatar) admin.auth().updateUser(profile.address,{
        photoURL: profile.avatar.uri
      })
      admin.auth().createCustomToken(profile.address)
      .then(function(customToken) {
        response.json(customToken).send()
        database.databaseWrite({
          writeType: 'update',
          branch: ["users", profile.address, 'profile'],
          payload: {
            ...profile
          },
        })
      })
      .catch(function(error) {
        response.send(error)
        console.log("Error creating custom token:", error);
      });
  })
  .catch(function(error) {
    response.send(error)
    console.log("Error creating custom token:", error);
  });

  })  
})


/**
 * Identity Callback
 * @desc Callback URL for the uPort Identity
 */
exports.identityCallback = functions.https.onRequest((request,response)=> {
  const UID = request.query.uid
  const accessToken = request.body.access_token
  database.databaseWrite({
    writeType: 'update',
    branch: ["request", 'login', UID, 'data'],
    payload: {
      JWT: accessToken
    },
  })
})

/*---*---------------              ---------------*---* 

                    Database Requests 

/*---*---------------              ---------------*---*/

/**
 * Manage Attestation Requests
 * 
 * TODO(@kamescg): Better Attestation Verification database naming structure.
 * 
 * Currently the '/request/attestation/' path is montired for database changes.
 * This is just a starting point and MVP for data streaming between frontend/backend
 *  
 * The process needs to be more thoroughly thought about to fully understand how we
 * can enable as many verifiatons systems to "hook" into our private verification attestation
 * framework/boilerplate. 
 */

exports.attestationRequest = functions.database.ref('/request/{type}/{request}')
  .onCreate(event => {
    const eventKey = event.data.key 
    const eventData = event.data.val()
    if(eventData.meta.status) {
      switch(eventData.meta.status) {
        case('initialized'):
          switch(eventData.meta.type) {
            case('login'):
            return loginGenerate(eventData, eventKey)
            case('attestation'):
            return attestationGenerate(eventData, eventKey)
          }
        default:
        // TODO(@kamescg): Handle default use case. 
        break;
      }
    }
  })


exports.eventRequest = functions.database.ref('/events/{event}')
.onCreate(event => {
  const eventKey = event.data.key 
  const eventData = event.data.val()
  if(eventData.meta.status) {
    switch(eventData.meta.status) {
      case('initialized'):
        return eventGenerate(eventData, eventKey)
      default:
      // TODO(@kamescg): Handle default use case. 
      break;
    }
  }
})


const loginGenerate = (eventData, eventKey) => {
  return uportCredentials.createRequest({
    requested: eventData.input.requested,
    notifications: eventData.input.notifications,
    callbackUrl: `https://us-central1-buidlbox-dev.cloudfunctions.net/identityCallback?uid=${eventKey}`
  }).then(requestToken => {
    database.databaseWrite({
      writeType: 'update',
      branch: ["request", 'login', eventKey],
      payload: {
        data: {
          qr: `me.uport:me?requestToken=${requestToken}`
        },
        meta: {
          status: 'requested',
          type: 'login'
        }
      },
    })
  })
}

const attestationGenerate = (eventData, eventKey) => {
  return database.databaseSearch({
    branch: ["users"],
    boundaries: {
      child: eventData.meta.uid
    },
  }).then(lookup=>{
    uportCredentials.attest({
      sub: lookup[0].address,
      claim: {
        ...eventData.data
      }
    }).then(attestation=>{
      const url =  `me.uport:add?attestations=${attestation}`
      uportCredentials.push(lookup[0].pushToken, lookup[0].publicEncKey, {url}).then(response => {
        database.databaseWrite({
          writeType: 'update',
          branch: ["request", 'attestation', eventKey, 'meta'],
          payload: {
            ...response
          },
        })
      })
    }).catch(err=>{
      database.databaseWrite({
        writeType: 'update',
        branch: ["request", 'attestation', eventKey, 'error'],
        payload: {
          ...err
        },
      })
    })
  })
}

const eventGenerate = (eventData, eventKey) => {
    uportCredentials.attest({
      sub: '2oo7fQjxR44MnKa8n4XKDZBBa2Buty4qrug',
      claim: {
        ...eventData.input
      }
    }).then(attestation=>{
      const url =  `me.uport:add?attestations=${attestation}`
        database.databaseWrite({
          writeType: 'update',
          branch: ['events', eventKey, 'data'],
          payload: {
            QR: url
          },
        })
    }).catch(err=>{
      database.databaseWrite({
        writeType: 'update',
        branch: ['events', eventKey, 'error'],
        payload: {
          ...err
        },
      })
    })
}




/*---*---------------              ---------------*---* 

                      Authentication 

/*---*---------------              ---------------*---*/
exports.authenticationComplete = functions.auth.user().onCreate(event => {

  const providerAccountType = {
    "google.com": 'google',
    "github.com": 'github',
    "twitter.com": 'twitter',
    "facebook.com": 'facebook',
  }[event.data.providerData.providerId]

  const person = {
    eid: event.data.uid,
    images: {
      imageProfile: event.data.photoURL
    },
    name: {
      nameDisplay: event.data.displayName,
      nameFirst: event.data.displayName,
    },
    contact: {
      contactEmail: event.data.email,
    },
    metadata: {
      metadataAccountType: providerAccountType || false
    },
    provider: event.data.providerData,
  }
  firestore.collection('people').add(person)

});

/*---*---------------              ---------------*---* 

                     Ethereum Signing 

/*---*---------------              ---------------*---*/
/* TODO (@siunami): Currently everything is hardcoded

infuraProviderKey: need to supply infura provider key
privateKeyOfSender: privateKey of signer
sendTokenTo: address to send token to
sentToken: hardcoded to send 1 token to same address. FUTURE: Will accept as request parameters
myContractABI, myContractAddress: for each contract

*/
exports.transferToken = functions.https.onRequest((req,res) => {
  // Provided by user
  var infuraProviderKey = '';
  var privateKeyOfSender = '';
  var sendTokenTo = '';
  var numTokensToSend = 1;

  var myContractABI = [];
  var myContractAddress = "";

  var provider = new ethers.providers.InfuraProvider('rinkeby',infuraProviderKey);
  var wallet = new ethers.Wallet(privateKeyOfSender, provider);
  var contract = new ethers.Contract(myContractAddress, myContractABI, wallet);

  var sentToken = contract.transfer(sendTokenTo, numTokensToSend*100);
  return sentToken.then(function(){
    console.log("SUCCESS");
    return res.redirect(303, "/");
  }).catch(function(err){
    console.log("FAILURE");
    console.log(err);
    return res.redirect(404, err);
  })
})

