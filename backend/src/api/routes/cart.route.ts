import express from "express";
import { checkAccessToken } from "../middlewares/jwt.middleware";
import { addCartItemController, deleteCartItemController, getCartItemController, checkoutController } from "../controllers/cart.controller";
const route = express.Router();

route.post("/add-item", checkAccessToken, addCartItemController);
route.post("/delete-item", checkAccessToken, deleteCartItemController);
route.get("/get-item-cart", checkAccessToken, getCartItemController);
route.post("/checkout", checkAccessToken, checkoutController);

export default route;