import { Request, Response, NextFunction } from "express";
import { getReceiptService } from "../services/receipt.service";

export const getReceipt = async(req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const result = await getReceiptService(parseInt(token.userid));
        res.json(result);
    } catch (error) {
        
    }
}