import { User } from "../interfaces/user.interface";

const jwt = require("jsonwebtoken");
require("dotenv").config();

export const genAccessToken = async(userInfo: User) => {
    const accessToken = await jwt.sign({
        userid: userInfo.id,
        username: userInfo.username,
        birthday: userInfo.dateOfBirth
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "30s"});
    return accessToken;
}

export const genRefreshToken = async(userInfo: User) => {
    const refreshToken = await jwt.sign({
        userid: userInfo.id,
        username: userInfo.username,
        birthday: userInfo.dateOfBirth
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: "1h"});
    return refreshToken;
}


