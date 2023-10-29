import express, { Request, Response, NextFunction } from "express";
import { authLoginController, authRefreshController, authRegisterController } from "../controllers/auth.controller";
import { checkAccessToken, checkRefreshToken } from "../middlewares/jwt.middleware";
const route = express.Router();

route.post('/login', authLoginController);
route.post('/register', authRegisterController);
route.post('/logout')
route.post('/refresh', checkRefreshToken, authRefreshController);
export default route;