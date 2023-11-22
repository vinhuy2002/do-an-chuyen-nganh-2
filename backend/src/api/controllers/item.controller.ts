import { Request, Response, NextFunction } from "express";
import { Item } from "../interfaces/item.interface";
import { addItemService, getItemService, updateItemService, getAllItemService, deleteItemService, getItemByUserSevice } from "../services/item.service";

export const addItemController = async(req: Request,  res: Response) => {
    try {
        const files = req.files as Express.Multer.File[];
        const token = res.locals.validToken;
        const item: Item = {
            category_id: parseInt(req.body.category_id),
            user_id: token.userid,
            item_name: req.body.item_name,
            description: req.body.description,
            price: parseFloat(req.body.price),
            quantity: parseInt(req.body.quantity),
            images: {
                image_name: files,
            },
        }
        const data = await addItemService(item);
        res.json(data);
    } catch (error) {
        
    }
}

export const updateItemController = async (req: Request, res: Response) => {
    try {
        const files = req.files as Express.Multer.File[];
        const token = res.locals.validToken;
        const item: Item = {
            category_id: parseInt(req.body.category_id),
            user_id: token.userid,
            item_name: req.body.item_name,
            description: req.body.description,
            price: parseFloat(req.body.price),
            quantity: parseInt(req.body.quantity),
            images: {
                image_name: files,
            },
        }
        const data = await updateItemService(item);
        res.json(data);
    } catch (error) {
        
    }
}

export const getItemController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const getItem = await getItemService(parseInt(id));
        res.json(getItem);
    } catch (error) {
        
    }
}

export const getAllItemController = async(req: Request, res: Response) => {
    try {
        const getAllItem = await getAllItemService();
        res.json(getAllItem);
    } catch (error) {
        
    }
}

export const deleteItemController = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const deleteItem = await deleteItemService(parseInt(id));
        res.json(deleteItem);
    } catch (error) {
        
    }
}

export const getItemByUserController = async (req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const result = await getItemByUserSevice(parseInt(token.user));
        res.json(result);
    } catch (error) {
        
    }
}