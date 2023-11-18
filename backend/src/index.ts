import express, { Request, Response } from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
const cors = require("cors");
import userRoute from "./api/routes/user.route";
import authRoute from "./api/routes/auth.route";
import categoryRoute from "./api/routes/category.route";
import * as path from "path"
import multer from "multer";
const app = express();

require("dotenv").config();
const upload = multer({
  storage: multer.memoryStorage()
})
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute)
//Test
import firebase from "./api/utils/firebase";
app.get('/listFiles', async (req, res) => {
  try {
    const [files] = await firebase.getFiles();

    const fileNames = files.map(file => file.name);

    res.json({ files: fileNames });
  } catch (error) {
    console.error('Error listing files:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(process.env.HOST_PORT, () => {
  console.log(`Running on http://localhost:${process.env.HOST_PORT}`);
});