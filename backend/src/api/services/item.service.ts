import { Items, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import firebase from "../utils/firebase";
import { Item } from "../interfaces/item.interface";
import { v4 as uuidv4 } from "uuid";
import { ImgInfo } from "../interfaces/user.interface";

export const getItemService = async (id: any) => {
    try {
        const data = await prisma.items.findFirst({
            where: {
                id: id
            }
        });
        return data;
    } catch (error) {

    }
}

export const getItemByUserSevice = async (id: number) => {
    try {
        const data = await prisma.items.findMany({
            where: {
                user_id: id
            }
        });
        return data;
    } catch (error) {

    }
}

const getItemRestrict = async (itemId: any, userId: number) => {
    try {
        const data = await prisma.items.findUnique({
            where: {
                id: itemId,
                user_id: userId
            }
        });
        return data;
    } catch (error) {

    }
}


const deleteImgFirebase = async (imgArray: any[] | undefined) => {
    if (imgArray == undefined) {
        return;
    }
    for (const img of imgArray) {
        const file = firebase.file(img);
        const check = await file.exists()
        if(check[0]) {
            await file.delete();
        }
    }
}

const checkImgFirebase = async (item: Item) => {
    const data = await getItemRestrict(item.id, item.user_id);
    let arrayImg: any;
    if (data?.image_name) {
        arrayImg = data.image_name;
    }
    const deleteImg = async (arrayImg: any[], images: ImgInfo[] | undefined) => {
        for (const img of arrayImg) {
            if (images == undefined) {
                const file = firebase.file(img);
                const exists = await file.exists();
                if (exists[0]) {
                    await file.delete();
                }
            } else
            if (!images.includes(img)) {
                const file = firebase.file(img);
                const exists = await file.exists();
                if (exists[0]) {
                    await file.delete();
                }
            }
        }
    }
    if (!item.images?.image_name) {
        return undefined;
    }
    await deleteImg(arrayImg, item.images?.image_name)
    
    const processImg = async (images: ImgInfo[]) => {
        for (const eachImg of images) {
            const file = firebase.file(eachImg.originalname);
            let check = await file.exists();
            if (!check[0]) {
                const splitname: any = eachImg.originalname.split('.').pop();
                eachImg.originalname = uuidv4() + "." + splitname;
                const file1 = firebase.file(eachImg.originalname);
                const stream = file1.createWriteStream({
                    metadata: {
                        contentType: eachImg.mimetype,
                    },
                    resumable: false,
                });
                stream.on('error', (err) => {
                    return false;
                });

                stream.on('finish', () => {
                    return true;
                });
                stream.end(eachImg.buffer);
            }
        }
    }
    await processImg(item.images.image_name);
}

const addImgFirebase = (item: Item) => {
    if (!item.images?.image_name) {
        return undefined;
    }
    item.images.image_name.forEach(async (eachImg: ImgInfo) => {
        const splitname: any = eachImg.originalname.split('.').pop();
        eachImg.originalname = uuidv4() + "." + splitname;
        const file = firebase.file(eachImg.originalname);
        const stream = file.createWriteStream({
            metadata: {
                contentType: eachImg.mimetype,
            },
            resumable: false,
        });

        stream.on('error', (err) => {
            return false;
        });

        stream.on('finish', () => {
            return true;
        });
        stream.end(eachImg.buffer);
    });

}

export const addItemService = async (item: Item) => {
    try {
        addImgFirebase(item);
        const addItem = await prisma.items.create({
            data: {
                category_id: item.category_id,
                user_id: item.user_id,
                item_name: item.item_name,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
                image_name: item.images?.image_name.map((obj: any) => obj.originalname)
            }
        });
        return addItem;
    } catch (error) {

    }
}

export const updateItemService = async (item: Item) => {
    try {
        await checkImgFirebase(item);
        const data = await prisma.items.update({
            where: {
                id: item.id,
                user_id: item.user_id
            },
            data: {
                category_id: item.category_id,
                item_name: item.item_name,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
                option: item.option,
                image_name: item.images?.image_name.map((obj: any) => obj.originalname),
            }
        });
        return data;
    } catch (error) {

    }
}

export const deleteItemService = async (id: number, userId: number) => {
    try {
        const check = await getItemRestrict(id, userId);
        const arr: any = check?.image_name;
        await deleteImgFirebase(arr);
        const data = await prisma.items.delete({
            where: {
                id: id,
                user_id: userId
            }
        });
        return data;
    } catch (error) {

    }
}

export const getAllItemService = async () => {
    try {
        const data = await prisma.items.findMany();
        return data;
    } catch (error) {

    }
}

