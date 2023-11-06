import { Request, Response, NextFunction } from "express";
import { CustomeRefreshToken } from "../interfaces/interface";
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const checkAccessToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.get("Authorization");
        const token = header?.split(" ")[1];
        const validToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (validToken) {
            res.locals.validToken = validToken;
            return next();
        }
    } catch (error) {
        return res.status(400).json({ error: error });
    }
}

export const checkRefreshToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const refreshToken = req.body.refreshToken;
        const validToken = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        if (validToken) {
            return next();
        }
    } catch (error) {
        return res.status(400).json({ error: error });
    }
}

export const checkResetToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const resetToken = req.params.token;
        const validToken = await jwt.verify(resetToken, process.env.RESET_TOKEN_SECRET);
        if (validToken) {
            return next();
        }
    } catch (error) {
        return res.status(400).json({ error: error });
    }
}