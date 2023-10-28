import express, { Request, Response, NextFunction } from "express";
import { addUserController, deleteUserController } from "../controllers/user.controller";

const route = express.Router();

route.get('/add', addUserController);
route.get('/del', deleteUserController);

export default route;