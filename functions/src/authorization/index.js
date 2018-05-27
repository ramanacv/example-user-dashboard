const admin = require('firebase-admin')

export default (req, res, next) => {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !req.cookies.__session) {
    res.status(403).send('Unauthorized')
    return
  }

  let idToken
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else {
    idToken = req.cookies.__session
  }
  admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
    req.user = decodedIdToken
    next()
  }).catch(error => {
    console.error('Error while verifying Firebase ID token:', error)
    res.status(403).send('Unauthorized')
  })
}
