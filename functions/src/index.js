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
const serviceAccount = require('../secrets/service_account.json')
const Credentials = uport.Credentials;
const SimpleSigner = uport.SimpleSigner;

/**
 * Configuration
 * @desc uportAppName
 * 
 * @desc uportAppAddress
 * 
 * @desc uportAppSimpleSigner
 * The SimpleSigner key is reponsible for verifying decentralized applications.
 * In producion please add the SimpleSigner key as an envrionment variable.
 */
const configuration = functions.config()

// uPort
const uportAppName = configuration.uport.appname
const uportAppAddress = configuration.uport.address
const uportSimpleSignerKey = configuration.uport.simplesigner


// Firebase
const projectId = configuration.firebase.projectId
const databaseURL = configuration.firebase.databaseURL

/**
 * uPort | Credentials
 * 
 */
const uportSimpleSigner = SimpleSigner(uportSimpleSignerKey)
// const uportCredentials = new Credentials({
//   appName: uportAppName,
//   address: uportAppAddress,
//   signer: uportSimpleSigner,
// })

// const uportSimpleSigner = SimpleSigner('d12d8a5c643ab7facc0a1815807aba1bed174762a2061b6b098b7bffd7462236')
const uportCredentials = new Credentials({
  appName: uportAppName,
  address: uportAppAddress,
  signer: uportSimpleSigner,
})

/* ------------------------ Initialize Dependencies ------------------------- */
/**
 * Firebase - Administrator Initialization
 */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
})
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
      if (profile.name) {
        admin.auth().updateUser(profile.address, {
          displayName: profile.name
        })
      }
      if (profile.avatar) {
        admin.auth().updateUser(profile.address, {
          photoURL: profile.avatar.uri
        })
      }
      admin.auth().createCustomToken(profile.address)
      .then(function(customToken) {
        response.json(customToken).send()
        database.databaseWrite({
          writeType: 'update',
          branch: ["users", profile.address, 'profile'],
          payload: {
            ...profile
          }
        })
      })
      .catch((error)=>{
        response.send(error)
        database.databaseWrite({
          writeType: 'create',
          branch: ['errors'],
          payload: {
            data: error,
            meta: {
              type: 'uport',
              category: 'createCustomToken'
            }
          }
        })
        console.log("Error creating custom token:", error);
      })
    })
    .catch((error)=>{
      response.send(error)
      console.log("Error creating custom token:", error);
    })
  }) 
})


/**
 * Identity Callback
 * @desc Callback URL for the uPort Identity
 */
exports.identityCallback = functions.https.onRequest((request,response)=> {
  console.log(request)
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
        }
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
