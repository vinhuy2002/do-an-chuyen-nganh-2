import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
const cors = require("cors");
// import { createClient } from "redis";
// const client = createClient();
import userRoute from "./api/routes/user.route";
import authRoute from "./api/routes/auth.route";
const app = express();

require("dotenv").config();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.HOST_PORT, () => {
    console.log(`Running on http://localhost:${process.env.HOST_PORT}`);
});