import { Request, Response, NextFunction } from "express";
import { Item } from "../interfaces/item.interface";
import { addItemService, getItemService, updateItemService, getAllItemService, deleteItemService, getItemByUserSevice, getItemByCategoryService, getItemByNameService } from "../services/item.service";

export const getItemByNameController = async(req: Request, res:Response) => {
    try {
        const {name} = req.params;
        const data = await getItemByNameService(name);
        res.json(data);
    } catch (error) {
        
    }
}

export const showImageController = async(req: Request, res: Response) => {
    try {
        const {img} = req.params;
        const showImgURL = "https://firebasestorage.googleapis.com/v0/b/dacn-2.appspot.com/o/" + img + "?alt=media";
        res.json(showImgURL);
    } catch (error) {
        
    }
}

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
        console.log(item);
        res.json(data);
    } catch (error) {
        
    }
}

export const updateItemController = async (req: Request, res: Response) => {
    try {
        const files = req.files as Express.Multer.File[];
        const token = res.locals.validToken;
        const item: Item = {
            id: parseInt(req.params.id),
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
        const token = res.locals.validToken;
        const deleteItem = await deleteItemService(parseInt(id), token.userid);
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

export const getItemByCategoryController = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const data = await getItemByCategoryService(parseInt(id));
        res.json(data);
    } catch (error) {
        
    }
}