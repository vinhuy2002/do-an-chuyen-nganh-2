import express, {Request, Response, NextFunction} from "express";
import { Comment, DeleteComment } from "../interfaces/comment.interface";
import { addCommentService, getCommentService, deleteCommentService, getCommentByIdService } from "../services/comment.service";

export const addCommentController = async (req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const comment: Comment = {
            user_id: token.userid,
            item_id: req.body.item_id,
            comment: req.body.comment,
            commented_date: new Date(),
        }
        const data = await addCommentService(comment);
        res.json(data);
    } catch (error) {
        
    }
}

export const deleteCommentController = async(req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const deleteComment: DeleteComment = {
            id: req.body.id,
            item_id: req.body.id,
            user_id: token.userid
        }
        const data = await deleteCommentService(deleteComment);
        res.json(data);
    } catch (error) {
        
    }
}

export const getCommentController = async (req: Request, res: Response) => {
    try {
        const {item_id} = req.params;
        const data = await getCommentService(parseInt(item_id));
        res.json(data);
    } catch (error) {

    }
}

export const getCommentByIdController = async (req: Request, res: Response) => {
    try {
        const token = res.locals.validToken; 
        const data = await getCommentByIdService(token.userid);
        res.json(data);
    } catch (error) {
        
    }
}