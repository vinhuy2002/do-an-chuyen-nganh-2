import { NextFunction, Request, Response } from "express";
import { createClient } from "redis";
const client = createClient();
client.connect();
export const checkRefTokenBlacklist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body.refreshToken
        const value = await client.get(`bl_${data}`);
        if (!value) {
            return next();
        }
        res.json({
            Message: "Token Không hợp lệ!"
        });
    } catch (error) {
    }
}