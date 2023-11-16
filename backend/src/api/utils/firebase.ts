import * as admin from "firebase-admin";
const serviceAccount = require("../../../dacn2.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'dacn-2.appspot.com'
});
const bucket = admin.storage().bucket();
export default bucket;