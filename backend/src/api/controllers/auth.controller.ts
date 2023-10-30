import { Request, Response } from "express";
import { Login, User, genTokenInfo } from "../interfaces/user.interface";
import { authLogin, authLogout, authRegister, authResetPassword } from "../services/auth.service";
import { genAccessToken, genRefreshToken, genResetToken } from "../utils/jwttoken";
const bcrypt = require("bcrypt");
const saltRounds = 10;
import nodemailer from "nodemailer";
import { ResetEmail } from "../interfaces/interface";
require("dotenv").config();

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
        await authLogout(refreshToken);
        res.json({
            Message: "Đăng xuất thành công!"
        });
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

export const authResetPasswordController = async(req: Request, res: Response) => {
    try {
        const pass = req.body.pass;
        const repass = req.body.repass;
        if (pass === repass) {
            res.json({
                Message: "Đổi Thành công"
            });
        }
        res.json({
            Message: "Đổi thất bại"
        })
    } catch (error) {
        
    }
}

export const authSendEmailController = async(req: Request, res: Response) => {
    try {
        const user: ResetEmail = {
            email: req.body.email
        };
        const token = await genResetToken(user);
        const link = `http://localhost:3000/api/auth/reset-password/${token}`;
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            }
        });
        const mailOption = {
            from: process.env.GMAIL_USER,
            to: req.body.email,
            subject: 'Thay Đổi Mật Khẩu',
            html: `
                <h5>Xin chào bạn, ${req.body.email}</h5>
                <p>Chúng tôi thấy bạn đang cố đổi mật khẩu!</p>
                <p><b>Nếu bạn không phải là người thực hiện điều này thì bạn có thể bỏ qua.</b> Xin cảm ơn!</p>
                <p>Link: <a href="/">${link}</a></p>
            `
        };
        await transport.sendMail(mailOption);
        res.json({
            Message: "Thành công"
        });
    } catch (error) {
        
    }
}

export const authResetPasswordCheckController = async(req: Request, res: Response) => {
    try {
        res.send("Thành công");
    } catch (error) {
        
    }
}