import { PrismaClient } from "@prisma/client";
import { Login, User } from "../interfaces/user.interface";
import { AdditionalInfo } from "../interfaces/user.interface";
import firebase from "../utils/firebase";
import {v4 as uuidv4} from "uuid";
const prisma = new PrismaClient();

const checkUserId = async (userId: number) => {
    return await prisma.userProfile.findFirst({
        where: {
            user_id: userId
        }
    });
}

const addImgFirebase = (additionalInfo: AdditionalInfo) => {
    if (!additionalInfo.profile_img){
        return undefined;
    }
    const splitName = additionalInfo.profile_img.originalname.split('.').pop(); 
    additionalInfo.profile_img.originalname = uuidv4() + "." + splitName;
    const file = firebase.file(additionalInfo.profile_img.originalname);
    const stream = file.createWriteStream({
        metadata: {
            contentType: additionalInfo.profile_img.mimetype,
        },
        resumable: false,
    });

    stream.on('error', (err) => {
        return false;
    });

    stream.on('finish', () => {
        return true;
    });

    stream.end(additionalInfo.profile_img.buffer);
}

const createInfoUser = async (additionalInfo: AdditionalInfo) => {
    try {
        const imgName = addImgFirebase(additionalInfo);
        const createInfo = await prisma.userProfile.create({
            data: {
                seller: additionalInfo.seller,
                profile_img: additionalInfo.profile_img?.originalname,
                home_address: additionalInfo.home_address,
                birthday: additionalInfo.birthday,
                user: {
                    connect: {
                        id: additionalInfo.user_id
                    }
                }
            }
        });

        return createInfo;
    } catch (error) {
        console.log(error);
    }
}

export const updateInfoUser = async (additionalInfo: AdditionalInfo) => {
    try {
        const check = await checkUserId(additionalInfo.user_id);
        if (check != null) {
            const imgName = addImgFirebase(additionalInfo);
            const updateInfo = await prisma.userProfile.update({
                where: {
                    user_id: additionalInfo.user_id
                },
                data: {
                    seller: additionalInfo.seller,
                    profile_img: additionalInfo.profile_img?.originalname,
                    home_address: additionalInfo.home_address,
                    birthday: additionalInfo.birthday
                }
            });
            return updateInfo;
        }
        const createInfo = await createInfoUser(additionalInfo);
        return createInfo;
    } catch (error) {

    }
}

export const getUser = async (userId: number) => {
    try {
        const data = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                name: true,
                email: true,
                phone_number: true,
                userProfile: {
                    select: {
                        seller: true,
                        profile_img: true,
                        home_address: true,
                        birthday: true
                    }
                }
            }
        });
        console.log(data);
        return data;
    } catch (error) {

    }
}
export const delelteUser = async (userId: number) => {
    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: userId
            }
        });
        return deleteUser;
    } catch (error) {
        console.log(error);
    }
}