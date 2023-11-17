import express, { Request, Response, NextFunction } from "express";
import { deleteUserController, getUserInfo, updateUserAddtionalInfo } from "../controllers/user.controller";
import { checkAccessToken } from "../middlewares/jwt.middleware";
import multer from "multer";
const route = express.Router();
const upload = multer({
  storage: multer.memoryStorage()
});

route.post('/update-profile', checkAccessToken, upload.single('file'), updateUserAddtionalInfo);
route.get('/profile', checkAccessToken, getUserInfo);
route.post('/delete-profile',checkAccessToken, deleteUserController);

export default route;