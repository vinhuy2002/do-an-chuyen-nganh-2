import { PrismaClient } from "@prisma/client";
import { Login, User } from "../interfaces/user.interface";
const prisma = new PrismaClient();
import { createClient } from "redis";
const client = createClient();
client.connect();
export const authLogin = async(userInfo: Login) => {
    try {
        const checkUser = await prisma.user.findFirst({
            where: {
                username: userInfo.username
            }
        });
        return checkUser;
    } catch (error) {
        
    }
}

export const authRegister = async(user: User) => {
    try {
        const createUser = await prisma.user.create({
            data: {
                username: user.username,
                password: user.password,
                email: user.email,
                phoneNumber: user.phoneNumber,
                dateOfBirth: user.dateOfBirth
            }
        });
        return createUser;
    } catch (error) {
        console.log(error);
    }
}

export const authLogout = async(token: any) => {
    try {
        const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        await client.set(`bl_${token}`, token, {
            EXAT: payload.exp
        });
    } catch (error) {
        
    }
}

export const authResetPassword = async(email: string) => {
    try {
        const checkUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        return checkUser;
    } catch (error) {
        
    }
}