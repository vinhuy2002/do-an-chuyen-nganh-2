import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
const cors = require("cors");
import userRoute from "./api/routes/user.route";
import authRoute from "./api/routes/auth.route";
const app = express();

require("dotenv").config();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

//Test
var admin = require("firebase-admin");
var serviceAccount = require("../dacn2.json")
import { Storage } from "@google-cloud/storage";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // storageBucket: 'dacn-2.appspot.com'
});

const storage = new Storage();
const bucket = storage.bucket('dacn-2.appspot.com');
app.get('/listFiles', async (req, res) => {
    try {
      const [files] = await bucket.getFiles();
  
    //   const fileNames = files.map(file => file.name);
  
      res.json({ files: files });
    } catch (error) {
      console.error('Error listing files:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(process.env.HOST_PORT, () => {
    console.log(`Running on http://localhost:${process.env.HOST_PORT}`);
});