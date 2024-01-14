import { PrismaClient } from "@prisma/client";
import { Login, User } from "../interfaces/user.interface";
const prisma = new PrismaClient();
import { createClient } from "redis";
import { UpdatePassword } from "../interfaces/interface";
// const client = createClient();
// client.connect();
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
                name: user.name,
                username: user.username,
                password: user.password,
                email: user.email,
                phone_number: user.phone_number,
                created_time: user.created_time
            }
        });
        return createUser;
    } catch (error) {
        return error;
    }
}

// export const authLogout = async(token: any) => {
//     try {
//         const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
//         await client.set(`bl_${token}`, token, {
//             EXAT: payload.exp
//         });
//     } catch (error) {
        
//     }
// }

export const authCheckMail = async(email: string) => {
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

export const authUpdatePassword = async(update: UpdatePassword) => {
    try {
        const updatePass = await prisma.user.update({
            where: {
                email: update.email
            },
            data: {
                password: update.password
            }
        });
        return updatePass;
    } catch (error) {
        
    }
}