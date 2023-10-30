import express, { Request, Response, NextFunction } from "express";
import { authLoginController, authLogoutController, authRefreshController, authRegisterController } from "../controllers/auth.controller";
import { checkAccessToken, checkRefreshToken } from "../middlewares/jwt.middleware";
import { checkRefTokenBlacklist } from "../middlewares/blacklist.middleware";
const route = express.Router();

route.post('/login', authLoginController);
route.post('/register', authRegisterController);
route.post('/logout', authLogoutController);
route.post('/refresh', checkRefTokenBlacklist ,checkRefreshToken, authRefreshController);
export default route;