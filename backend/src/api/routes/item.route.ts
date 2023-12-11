import express from "express";
const route = express.Router();
import multer from "multer";
import { addItemController, getItemController, getAllItemController, deleteItemController, getItemByUserController, updateItemController, showImageController, getItemByCategoryController, getItemByNameController } from "../controllers/item.controller";
import { checkAccessToken } from "../middlewares/jwt.middleware";
const upload = multer({
    storage: multer.memoryStorage()
  });

route.post("/add-item", checkAccessToken, upload.array('photos', 12), addItemController);
route.get("/:id", getItemController);
route.get("/", getAllItemController);
route.get("/search/:name", getItemByNameController);
route.get("/item-by-user", checkAccessToken, getItemByUserController);
route.post("/update/:id", checkAccessToken, upload.array('photos', 12), updateItemController);
route.post("/delete-item/:id", checkAccessToken, deleteItemController);
route.get("/image/:img", showImageController);
route.get("/item-by-category/:id", getItemByCategoryController);

export default route;