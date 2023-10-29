import { delelteUser} from "../services/user.service";
import { Request, Response } from "express";
import { Login, User } from "../interfaces/user.interface";
import { genAccessToken, genRefreshToken } from "../utils/jwttoken";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const dayjs = require("dayjs");

export const deleteUserController = async(req: Request, res: Response) => {
    const userId: any = req.params.userId;
    const result = await delelteUser(parseInt(userId));
    res.json({
        "Message": result
    })
}