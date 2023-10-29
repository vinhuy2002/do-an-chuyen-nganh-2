import express, { Request, Response, NextFunction } from "express";
import { authLoginController, authRegisterController } from "../controllers/auth.controller";
const route = express.Router();

route.post('/login', authLoginController);
route.post('/register', authRegisterController);
route.post('/logout')
route.post('/refresh')
export default route;