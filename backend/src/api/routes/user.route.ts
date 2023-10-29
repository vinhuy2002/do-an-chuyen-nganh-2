import express, { Request, Response, NextFunction } from "express";
import { deleteUserController } from "../controllers/user.controller";
import { checkAccessToken } from "../middlewares/jwt.middleware";

const route = express.Router();

route.get('/profile', checkAccessToken, (req: Request, res: Response) => {
    res.json({
        Message: "Profile"
    });
});
route.get('/delete/:userId', deleteUserController);

export default route;