import { PrismaClient } from "@prisma/client";
import { Login, User } from "../interfaces/user.interface";
const prisma = new PrismaClient();

export const delelteUser = async(userId: number) => {
    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: userId
            }
        });
        return deleteUser;
    } catch (error) {
        console.log(error);
    }
}