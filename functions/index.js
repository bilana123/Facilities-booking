const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./jnec-booking-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.addAdminRole = functions.https.onCall((data, context) => {
  return admin.auth().getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`
      };
    })
    .catch((err) => {
      return err;
    });
});
