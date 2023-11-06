import express, { Request, Response, NextFunction } from "express";
import { deleteUserController, getUserInfo, updateUserAddtionalInfo } from "../controllers/user.controller";
import { checkAccessToken } from "../middlewares/jwt.middleware";
const route = express.Router();

route.post('/update-profile', checkAccessToken, updateUserAddtionalInfo);
route.get('/profile', checkAccessToken, getUserInfo);

export default route;