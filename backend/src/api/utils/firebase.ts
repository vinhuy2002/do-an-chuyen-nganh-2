import admin from "firebase-admin";
import {Storage} from '@google-cloud/storage';
require("dotenv").config();
const serviceAccount = require("../../../dacn2.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'dacn-2.appspot.com'
});

const storage = new Storage();
const bucket = storage.bucket('dacn-2.appspot.com');
export default bucket;