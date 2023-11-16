import { AdditionalInfo } from "../interfaces/user.interface";
import { delelteUser, getUser, updateInfoUser} from "../services/user.service";
import { Request, Response } from "express";

export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const data = await getUser(token.userid);
        res.json(
            {
                "Profile": data
            }
        )
    } catch (error) {
        
    }
}



export const updateUserAddtionalInfo = async (req: Request, res: Response) => {
    try {
        const token = res.locals.validToken;
        const additionalInfo: AdditionalInfo = {
            user_id: token.userid,
            seller: parseInt(req.body.seller),
            profile_img: req.file,
            home_address: req.body.home_address,
            birthday: new Date(req.body.birthday)
        }
        console.log(additionalInfo);
        const updateInfo = await updateInfoUser(additionalInfo);
        res.send(updateInfo);
    } catch (error) {
        
    }
}

export const deleteUserController = async(req: Request, res: Response) => {
    const userId: any = req.params.userId;
    const result = await delelteUser(parseInt(userId));
    res.json({
        Message: result
    })
}