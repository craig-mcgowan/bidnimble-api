/*---------------------------------
  Following along Svelte-GoogleOAuth Tutorial by Tom Wilson Hyper63
  https://blog.hyper63.com/svelte-google-oauth/
----------------------------------*/

// const google = require( 'google-auth-library')
// const R = require( 'ramda')
// const crocks = require( 'crocks')

// const { Identity } = crocks

// const { pathOr, split, nth } = R
// console.log(google)

// module.exports = (CLIENT_ID) => (req, res, next) => {
//   const client = new google.OAuth2Client(CLIENT_ID);
//   return client
//     .verifyIdToken({
//       idToken: extractToken(req),
//       audience: CLIENT_ID,
//     })
//     .then((ticket) => (req.user = ticket.getPayload()))
//     .then(() => next())
//     .catch((error) => next(error));
// };

// function extractToken(req) {
//   return Identity(req)
//     .map(pathOr("Bearer INVALID", ["headers", "authorization"]))
//     .map(split(" "))
//     .map(nth(-1))
//     .valueOf();
// }

