import { PrismaClient } from "@prisma/client";
import { Comment, DeleteComment } from "../interfaces/comment.interface";
const prisma = new PrismaClient();

export const addCommentService = async (comment: Comment) => {
    try {
        const data = await prisma.comment.create({
            data: {
                item_id: comment.item_id,
                user_id: comment.user_id,
                comment: comment.comment,
                commented_date: comment.commented_date
            }
        });
        return data;
    } catch (error) {
        
    }
}

export const getCommentService =async (item_id: number) => {
    try {
        const data = await prisma.comment.findMany({
            where: {
                item_id: item_id
            }
        });
        return data;
    } catch (error) {
        
    }
}

export const deleteCommentService = async(deleteComment: DeleteComment) => {
    try {
        const data = await prisma.comment.delete({
            where: {
                id: deleteComment.id,
                user_id: deleteComment.user_id,
                item_id: deleteComment.item_id,
            }
        });
        return data;
    } catch (error) {
        
    }
}

export const getCommentByIdService = async(user_id: number) => {
    try {
        const data = await prisma.comment.findMany({
            where: {
                user_id: user_id
            }
        });
        return data;
    } catch (error) {
        
    }
}