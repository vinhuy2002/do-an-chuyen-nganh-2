import { Request, Response } from "express";
import { Login, User, genTokenInfo } from "../interfaces/user.interface";
import { authLogin, authRegister } from "../services/auth.service";
import { genAccessToken, genRefreshToken } from "../utils/jwttoken";
import { CustomeRefreshToken } from "../interfaces/interface";
const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassowrd = async(password: string) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const comparePassword = async(passUser: string, passDB: string) => {
    return bcrypt.compareSync(passUser, passDB);
}

export const authLoginController = async(req: Request, res: Response) => {
    try {
        const userLogin: Login = {
            username: req.body.username,
            password: req.body.password
        }
        const checkUser = await authLogin(userLogin);
        if (checkUser && (await comparePassword(userLogin.password, checkUser.password) === true)) {
            const userInfo: genTokenInfo = {
                id: checkUser.id,
                username: checkUser.username
            }
            const accessToken = await genAccessToken(userInfo);
            const refreshToken = await genRefreshToken(userInfo);
            res.json({
                AccessToken: accessToken,
                RefreshToken: refreshToken
            });
        }
        res.json(
            {
                Message: "Tài khoản hoặc mật khẩu nhập không chính xác",
            }
        );
    } catch (error) {
        
    }
}

export const authRegisterController = async(req: Request, res: Response) => {
    try {
        const user: User = {
            username: req.body.username,
            password: await hashPassowrd(req.body.password),
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            dateOfBirth: new Date(req.body.dateOfBirth)
        }
        const result = await authRegister(user);
        res.json({
            Message: result,
        });
    } catch (error) {
        
    }
}

export const authLogoutController = async(req: Request, res: Response) => {
    try {
        const refreshToken = req.body.refreshToken;
        
    } catch (error) {
        
    }
}

export const authRefreshController = async(req: Request, res: Response) => {
    try {
        const data = req.body.refreshToken;
        const userInfo: genTokenInfo = {
            id: data.userid,
            username: data.username,
        }
        const newAccessToken = await genAccessToken(userInfo);
        res.json({
            "AccessToken": newAccessToken,
        })
    } catch (error) {
        
    }
}