import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getReceiptService = async(userId: number) => {
    try {
        const data = await prisma.receipt.findMany({
            where: {
                user_id: userId
            },
            include: {
                cart: {
                    include: {
                        items: true
                    }
                }
            }
        })
        return data;
    } catch (error) {
        
    }
}