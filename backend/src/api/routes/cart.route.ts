import express from "express";
import { checkAccessToken } from "../middlewares/jwt.middleware";
import { addCartItemController, deleteCartItemController } from "../controllers/cart.controller";
const route = express.Router();

route.post("/add-item", checkAccessToken, addCartItemController);
route.post("/delete-item", checkAccessToken, deleteCartItemController);

export default route;