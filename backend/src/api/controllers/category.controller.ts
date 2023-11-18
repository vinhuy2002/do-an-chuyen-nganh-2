import { Category } from "../interfaces/category.interface";
import { addCategoryService, getCategoryService } from "../services/category.service";
import { Request, Response, NextFunction } from "express";

export const getCategoryController = async(req: Request, res: Response) => {
    try {
        res.json(await getCategoryService());
    } catch (error) {
        
    }
}

export const addCategoryController = async (req: Request, res: Response) => {
    try {
        const category: Category = {
            category_name: req.body.category_name,
            description: req.body.description
        }
        res.json(await addCategoryService(category));
    } catch (error) {
        
    }
}