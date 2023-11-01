import express, { Request, Response, NextFunction } from "express";
import { authLoginController, authLogoutController, authRefreshController, authRegisterController, authResetPasswordCheckController, authSendEmailController } from "../controllers/auth.controller";
import { checkAccessToken, checkRefreshToken, checkResetToken } from "../middlewares/jwt.middleware";
import { checkRefTokenBlacklist } from "../middlewares/blacklist.middleware";
const route = express.Router();

route.post('/login', authLoginController);
route.post('/register', authRegisterController);
route.post('/logout', authLogoutController);
route.post('/refresh', checkRefTokenBlacklist ,checkRefreshToken, authRefreshController);
route.post('/reset-password/:token', checkResetToken, authResetPasswordCheckController);
route.post('/send-email', authSendEmailController);
export default route;