import { delelteUser} from "../services/user.service";
import { Request, Response } from "express";

export const deleteUserController = async(req: Request, res: Response) => {
    const userId: any = req.params.userId;
    const result = await delelteUser(parseInt(userId));
    res.json({
        Message: result
    })
}