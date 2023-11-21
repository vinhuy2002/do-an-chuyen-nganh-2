import { Request, Response, NextFunction } from "express";
import { Item } from "../interfaces/item.interface";
import { addItemService } from "../services/item.service";

export const addItemController = async(req: Request,  res: Response) => {
    try {
        const files = req.files as Express.Multer.File[];
        
        
        const item: Item = {
            category_id: parseInt(req.body.category_id),
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