import { Request, Response } from "express"
import { Cart, DetailCart } from "../interfaces/cart.interface";
import { addCartItemService, deleteCartItemService, getCartItemService } from "../services/cart.service";

export const addCartItemController = async(req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const cart: Cart = {
            item_id: req.body.item_id,
            quantity: req.body.quantity,
            user_id: token.userid
        };
        const data = await addCartItemService(cart);
        res.json(data);
    } catch(error) {

    }
}

export const deleteCartItemController = async(req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const detailCart: DetailCart = {
            item_id: req.body.item_id,
            quantity: req.body.quantity,
            user_id: token.userid,
            id: req.body.id,
        };
        const data = await deleteCartItemService(detailCart);
        return data;
    } catch (error) {
        
    }
}

export const getCartItemController = async(req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const data = await getCartItemService(token.userid);
        res.json(data);
    } catch (error) {
        
    }
}