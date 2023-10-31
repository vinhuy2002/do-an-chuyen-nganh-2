import { ResetEmail } from "../interfaces/interface";
import { User, genTokenInfo } from "../interfaces/user.interface";

const jwt = require("jsonwebtoken");
require("dotenv").config();

export const genAccessToken = async(userInfo: genTokenInfo) => {
    const accessToken = await jwt.sign({
        userid: userInfo.id,
        username: userInfo.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "15m"});
    return accessToken;
}

export const genRefreshToken = async(userInfo: genTokenInfo) => {
    const refreshToken = await jwt.sign({
        userid: userInfo.id,
        username: userInfo.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: "1h"});
    return refreshToken;
}

export const genResetToken = async(userInfo: ResetEmail) => {
    const resetToken = await jwt.sign({
        email: userInfo.email
    },
    process.env.RESET_TOKEN_SECRET,
    {expiresIn: "15m"});
    return resetToken;
}