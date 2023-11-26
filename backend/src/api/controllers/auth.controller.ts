import { Request, Response } from "express";
import { Login, User, genTokenInfo } from "../interfaces/user.interface";
import { authCheckMail, authLogin, authLogout, authRegister, authUpdatePassword } from "../services/auth.service";
import { genAccessToken, genRefreshToken, genResetToken } from "../utils/jwttoken";
const bcrypt = require("bcrypt");
const saltRounds = 10;
import nodemailer from "nodemailer";
import { ResetEmail, UpdatePassword } from "../interfaces/interface";
require("dotenv").config();


const hashPassowrd = async (password: string) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const comparePassword = async (passUser: string, passDB: string) => {
    return bcrypt.compareSync(passUser, passDB);
}

export const authLoginController = async (req: Request, res: Response) => {
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

export const authRegisterController = async (req: Request, res: Response) => {
    try {
        const user: User = {
            name: req.body.name,
            username: req.body.username,
            password: await hashPassowrd(req.body.password),
            email: req.body.email,
            phone_number: req.body.phone_number,
            created_time: new Date()
        }
        const result = await authRegister(user);
        res.json(result);
    } catch (error) {

    }
}

export const authLogoutController = async (req: Request, res: Response) => {
    try {
        const refreshToken = req.body.refreshToken;
        await authLogout(refreshToken);
        res.json({
            Message: "Đăng xuất thành công!"
        });
    } catch (error) {

    }
}

export const authRefreshController = async (req: Request, res: Response) => {
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
export const authSendEmailController = async (req: Request, res: Response) => {
    try {
        const user: ResetEmail = {
            email: req.body.email
        };
        const checkEmail = await authCheckMail(user.email);
        if (checkEmail) {
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
                <h3>Xin chào bạn, ${req.body.email}</h3>
                <p>Chúng tôi thấy bạn đang cố đổi mật khẩu!</p>
                <p><b>Nếu bạn không phải là người thực hiện điều này thì bạn có thể bỏ qua.</b> Xin cảm ơn!</p>
                <p>-------------------------------</p>
                <a href="${link}">${link}</a>
            `
            };
            await transport.sendMail(mailOption);
            res.json({
                Message: "Thành công"
            });
        }
        res.json({
            Message: "Tài khoản không tồn tại!"
        });
    } catch (error) {

    }
}

export const authResetPasswordCheckController = async (req: Request, res: Response) => {
    try {
        const {pass, repass} = req.body;
        const token = req.params.token;
        const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        if (pass === repass){
            const passwordHash = await hashPassowrd(pass);
            const updatePassword: UpdatePassword = {
                email: payload.email,
                password: passwordHash
            }
            await authUpdatePassword(updatePassword);
            res.json({
                Message: "Đổi mật khẩu thành công!"
            });
        }
        res.json({
            Message: "Đổi mật khẩu thất bại"
        });
    } catch (error) {

    }
}