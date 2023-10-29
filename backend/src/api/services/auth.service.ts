import { PrismaClient } from "@prisma/client";
import { Login, User } from "../interfaces/user.interface";
const prisma = new PrismaClient();

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