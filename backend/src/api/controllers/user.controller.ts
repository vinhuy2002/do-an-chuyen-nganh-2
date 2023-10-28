import {addUser, delelteUser} from "../services/user.service";
import { Request, Response } from "express";
export const addUserController = async(req: Request, res: Response) => {
    res.json({
        "Message": addUser()
    })
}

export const deleteUserController = async(req: Request, res: Response) => {
    res.json({
        "Message": delelteUser()
    })
}