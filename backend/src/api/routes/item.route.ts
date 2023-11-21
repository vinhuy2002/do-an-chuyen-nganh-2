import express from "express";
const route = express.Router();
import multer from "multer";
import { addItemController } from "../controllers/item.controller";
import { checkAccessToken } from "../middlewares/jwt.middleware";
const upload = multer({
    storage: multer.memoryStorage()
  });
route.post("/add-item", checkAccessToken, upload.array('photos', 12), addItemController);

export default route;