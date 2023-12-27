import express from "express";

import multer from "multer";
import { addItemController, getItemController, getAllItemController, deleteItemController, getItemByUserController, updateItemController, showImageController, getItemByCategoryController, getItemByNameController } from "../controllers/item.controller";
import { checkAccessToken } from "../middlewares/jwt.middleware";
const upload = multer({
  storage: multer.memoryStorage()
});
const route = express.Router();

route.post("/add-item", checkAccessToken, upload.array('photos', 12), addItemController);
route.get("/get-id/:id", getItemController);
route.get("/all", getAllItemController);
route.get("/search/:name", getItemByNameController);
route.get("/user/token", checkAccessToken,getItemByUserController);
route.post("/update/:id", checkAccessToken, upload.array('photos', 12), updateItemController);
route.delete("/delete/:id", checkAccessToken, deleteItemController);
route.get("/image/:img", showImageController);
route.get("/item-by-category/:id", getItemByCategoryController);

export default route;