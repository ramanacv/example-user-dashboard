/* ------------------------ External Dependencies ------------------------ */
const uport = require('uport')
const mnid = require('mnid')
const JWT = require('did-jwt')
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const cors = require('cors')({origin: true})
/* ------------------------- Internal Dependencies -------------------------- */
const utilities = require('./utilities')
const database = require('./database')
const serviceAccount = require('../secrets/service_account.json')
const ERC20 = require('./contracts/ERC20.js')
/* --------------------- Initialization & Configuration --------------------- */
/* uPort */
const Credentials = uport.Credentials
const SimpleSigner = uport.SimpleSigner
// const Contract = uport.Contract
const ContractFactory = uport.ContractFactory

/**
 * Temporary Fix
 * @desc @ZachFerland provided this temporary fix for smart contract transaction signing requests.
 * TODO (@kamescg) When the libraries are updated get rid of this temporary fix.
 */
const { buildRequestURI } = utilities
const Contract = ContractFactory(buildRequestURI)


/* MNID */
const decode = mnid.decode
/* ------------------------- Envirnonment Variables -------------------------- */
const configuration = functions.config()

// Firebase
const projectId = configuration.firebase.projectId
const databaseURL = configuration.firebase.databaseURL

// uPort
const uportAppName = configuration.uport.appname
const uportAppAddress = configuration.uport.address
const uportSimpleSignerKey = configuration.uport.simplesigner

/**
 * Credentials | uPort
 * @desc Initialize the uPort Credentials object to
 * request credentials and generate private attestations.
 */
const uportSimpleSigner = SimpleSigner(uportSimpleSignerKey)
const uportCredentials = new Credentials({
  appName: uportAppName,
  address: uportAppAddress,
  signer: uportSimpleSigner
})

/* ------------------------ Initialize Dependencies ------------------------- */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
})

/* ------------------------ Firebase Cloud Functions ------------------------ */
/**
 * Long-term the BuidlBox Cloud Functions should be converted into modules
 * but for the time being, while the cloud functions are are still under active
 * development the functionality will live here.
 * 
 * If you have any questions about the BuidlBox infrastructure please join the
 * uPort Community Channel at chat.uport.me and we'll be happy to answer any
 * questions and help you buidl distributed applications.
 */

/* --------------------------- Database Requests ---------------------------- */
/**
 * Manage Attestation Requests
 * TODO(@kamescg): "Official" Attestation Verification database naming structure.
 * Currently the '/request/attestation/' path is monitored for database changes.
 * This is just a starting point and MVP for data streaming between frontend/backend
 * The process needs to be more thoroughly thought about to fully understand how we
 * can enable as many verifiatons systems to "hook" into our private verification attestation
 * framework/boilerplate.
 */

exports.request = functions.database.ref('/request/{type}/{request}')
  .onCreate(event => {
    const eventKey = event.data.key
    const eventData = event.data.val()
    if (eventData.meta.status) {
      switch (eventData.meta.status) {
        case ('initialized'):
          switch (eventData.meta.type) {
            case ('login'):
              return loginGenerate(eventData, eventKey)
            case ('attestation'):
              return attestationGenerate(eventData, eventKey)
            case ('function'):
              return functionGenerate(eventData, eventKey)
            case ('credential'):
              return credentialRequest(eventData, eventKey)
            default:
              // TODO(@kamescg): Handle default use case
              break
          }
          break
        default:
          // TODO(@kamescg): Handle default use case
          break
      }
    }
  })

/* ------------------------ Core uPort Functionality ------------------------ */
/**
 * Identity
 * @desc Authenticates a uPort decentralized identity
 * @param {object} request The HTTP request object
 * @param {object} response The HTTP response object
 */
exports.identity = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    uportCredentials.receive(request.body.JWT)
    .then(profile => {
      /**
       * TODO(@kamescg) Saving the profile should be handled better.
       * During registration the information doesn't correctly appear in frontend.
       */
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
      /**
       * Generate the authentication token using the uPort MNID.
       * Send the authentication token to application fronend.
       * Save the latest credentials in the identity profile branch.
       */
      admin.auth().createCustomToken(profile.address)
      .then((AuthenticationToken) => {
        response.json(AuthenticationToken).send() // Return the AuthenticationToken to the Application Frontend
        const mnidDecoded = decode(profile.address)
        // Save Profile in Realtime Database
        database.databaseWrite({
          writeType: 'update',
          branch: ['users', profile.address, 'profile'],
          payload: {
            ...profile,
            addressDecoded: mnidDecoded
          }
        })
        // Save Profile in Firestore (NoSQL) - Experimental
        // TODO(@kamescg) Add Firestore Redux Saga to React Frontend
        // firestore.collection('people').update(profile)
      })
      .catch(error => {
        response.send(error)
        database.databaseWrite({
          writeType: 'create',
          branch: ['errors'],
          payload: {
            data: error,
            meta: {
              type: 'firebase',
              category: 'authenticationToken'
            }
          }
        })
        console.log('Error creating Firebase authentication token:', error)
      })
    })
    .catch(error => {
      database.databaseWrite({
        writeType: 'create',
        branch: ['errors'],
        payload: {
          data: error,
          meta: {
            type: 'uport',
            category: 'authenticationToken'
          }
        }
      })
      response.send(error)
      console.log('Error authenticating uPort decentralized identity:', error)
    })
  })
})

/**
 * Identity Callback
 * @desc Callback URL for the uPort Identity
 */
exports.identityCallback = functions.https.onRequest((request, response) => {
  const UID = request.query.uid
  const accessToken = request.body.access_token
  database.databaseWrite({
    writeType: 'update',
    branch: ['request', 'login', UID, 'data'],
    payload: {
      JWT: accessToken
    }
  })
})

/**
 * Credential Request
 * @desc Request a Credential from existing Identity
 * @param {object} eventData The data saved in the Firebase realtime database.
 * @param {string} eventKey The key referencing the new realtime database entry.
 */
const credentialRequest = (eventData, eventKey) => {
  if (!eventData.meta.uid) return null
  return database.databaseSearch({
    branch: ['users'],
    boundaries: {
      child: eventData.meta.uid
    }
  }).then(lookup => {
    uportCredentials.createRequest({
      requested: eventData.input.requested,
      callbackUrl: `https://us-central1-${projectId}.cloudfunctions.net/identityCallback?uid=${eventKey}`
    })
    .then(requestToken => {
      const url = `me.uport:me?requestToken=${requestToken}`
      uportCredentials.push(lookup[0].pushToken, lookup[0].publicEncKey, {url})
      .then(response => {
        database.databaseWrite({
          writeType: 'update',
          branch: ['request', 'attestation', eventKey, 'meta'],
          payload: {
            ...response
          }
        })
      })
    }).catch(err => {
      database.databaseWrite({
        writeType: 'update',
        branch: ['request', 'attestation', eventKey, 'error'],
        payload: {
          ...err
        }
      })
    })
  })
}

/**
 * Login Generate
 * @desc Generates a uPort login request using the createRequest method
 * @param {object} eventData The data saved in the Firebase realtime database.
 * @param {string} eventKey The key referencing the new realtime database entry.
 */
const loginGenerate = (eventData, eventKey) => {
  return uportCredentials.createRequest({
    requested: eventData.input.requested,
    notifications: eventData.input.notifications,
    callbackUrl: `https://us-central1-${projectId}.cloudfunctions.net/identityCallback?uid=${eventKey}`
  }).then(requestToken => {
    database.databaseWrite({
      writeType: 'update',
      branch: ['request', 'login', eventKey],
      payload: {
        data: {
          qr: `me.uport:me?requestToken=${requestToken}`
        },
        meta: {
          status: 'requested',
          type: 'login'
        }
      }
    })
  })
}

/**
 * @desc Generates a uPort attestation using the attest method
 * @param {object} eventData The data saved in the Firebase realtime database.
 * @param {string} eventKey The key referencing the new realtime database entry.
 */
const attestationGenerate = (eventData, eventKey) => {
  return database.databaseSearch({
    branch: ['users'],
    boundaries: {
      child: eventData.meta.uid
    }
  }).then(lookup => {
    uportCredentials.attest({
      sub: lookup[0].address,
      claim: {
        ...eventData.data
      }
    }).then(attestation => {
      const url = `me.uport:add?attestations=${attestation}`
      uportCredentials.push(lookup[0].pushToken, lookup[0].publicEncKey, {url}).then(response => {
        database.databaseWrite({
          writeType: 'update',
          branch: ['request', 'attestation', eventKey, 'meta'],
          payload: {
            ...response
          }
        })
      })
    }).catch(err => {
      database.databaseWrite({
        writeType: 'update',
        branch: ['request', 'attestation', eventKey, 'error'],
        payload: {
          ...err
        }
      })
    })
  })
}

/**
 * Function Generate
 * @desc Generates a uPort smart contract request
 * @param {object} eventData The data saved in the Firebase realtime database.
 * @param {string} eventKey The key referencing the new realtime database entry.
 */
const functionGenerate = (eventData, eventKey) => {
  return database.databaseSearch({
    branch: ['users'],
    boundaries: {
      child: eventData.meta.uid
    }
  })
  .then(account => {
    // uPort expects an MNID encoded address. We like to make uPort happy :)
    const contractAddress = mnid.encode({network: '0x4', address: '0x9660fab3ca763f2fa6cf85a19ffc423cc53c0523'})
    switch (eventData.meta.contract) {
      case 'ERC20':
        const contractInstance = Contract(ERC20.abi)
        const contract = contractInstance.at(contractAddress)
        const url = contract.transfer(eventData.input.address, eventData.input.amount)
        uportPush(account, url, eventKey)
        break
      default:
        break
    }
  })
}

/* ----------------------------- Utility Functions ----------------------------- */
const uportPush = (account, url, eventKey ) => {
  return uportCredentials.push(account[0].pushToken, account[0].publicEncKey, {url}).then(response => {
    database.databaseWrite({
      writeType: 'update',
      branch: ['request', 'contract', eventKey, 'data'],
      payload: {
        url
      }
    })
  })
}
