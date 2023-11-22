import { Items, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import firebase from "../utils/firebase";
import { Item } from "../interfaces/item.interface";
import { v4 as uuidv4 } from "uuid";

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

const checkImgFirebase = (item: Item) => {
    
    if (!item.images?.image_name) {
        return undefined;
    }
    item.images.image_name.forEach(async (eachImg: any) => {
        let check = await firebase.file(eachImg.originalname).exists();
        if (!check[0]) {
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
        }
    });
}

const addImgFirebase = (item: Item) => {
    if (!item.images?.image_name) {
        return undefined;
    }

    item.images.image_name.forEach((eachImg: any) => {
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
        const check = await getItemService(item.id);
        console.log(check);
        checkImgFirebase(item);
        const data = await prisma.items.update({
            where: {
                id: item.id
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

export const deleteItemService = async(id: number) => {
    try {
        const data = await prisma.items.delete({
            where: {
                id: id
            }
        });
        return data;
    } catch (error) {
        
    }
}

export const getAllItemService = async() => {
    try {
        const data = await prisma.items.findMany();
        return data;
    } catch (error) {
        
    }
}

export const getItemByUserSevice = async(id: number) => {
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