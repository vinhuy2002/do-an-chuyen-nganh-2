import express, { Request, Response } from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
const cors = require("cors");
import userRoute from "./api/routes/user.route";
import authRoute from "./api/routes/auth.route";
import categoryRoute from "./api/routes/category.route";
import itemRoute from "./api/routes/item.route";
import cartRoute from "./api/routes/cart.route"
import receiptRoute from "./api/routes/receipt.route";
const app = express();

require("dotenv").config();
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

//Route;
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute);
app.use("/api/item", itemRoute);
app.use("/api/cart", cartRoute);
app.use("/api/receipt", receiptRoute);

app.listen(process.env.HOST_PORT, () => {
  console.log(`Running on http://localhost:${process.env.HOST_PORT}`);
});