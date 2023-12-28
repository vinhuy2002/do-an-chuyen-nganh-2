import express from "express";
import { checkAccessToken } from "../middlewares/jwt.middleware";
import { getReceipt } from "../controllers/receipt.controller";
const route = express.Router();

route.post("/");
route.get("/user", checkAccessToken, getReceipt);

export default route;