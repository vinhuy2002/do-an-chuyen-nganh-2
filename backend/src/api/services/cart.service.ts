import { Cart, DetailCart } from '../interfaces/cart.interface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const checkReceipt = async (cart: Cart) => {
    try {
        const data = await prisma.receipt.findFirst({
            where: {
                user_id: cart.user_id,
                check_finished: false,
            },
        });
        return data;
    } catch (error) {
        // throw new Error();
    }
};

const createReceipt = async (cart: Cart) => {
    try {
        const data = await prisma.receipt.create({
            data: {
                user_id: cart.user_id,
                created_time: new Date(),
                check_finished: false,
            },
        });
        return data;
    } catch (error) {
        throw new Error();
    }
};

const checkReceiptById = async (id: number) => {
    try {
        const data = await prisma.receipt.findFirst({
            where: {
                user_id: id,
                check_finished: false,
            },
        });
        return data;
    } catch (error) {
        
    }
}

const addItemToCart = async (receipt_id: number, cart: Cart) => {
    try {
        const data = await prisma.cart.create({
            data: {
                receipt_id: receipt_id,
                item_id: cart.item_id,
                quantity: cart.quantity,
            },
        });
        return data;
    } catch (error) {
    }
};

export const addCartItemService = async (cart: Cart) => {
    try {
        const check = await checkReceipt(cart);

        if (!check) {
            const newReceipt = await createReceipt(cart);
            return await addItemToCart(newReceipt.id, cart);
        }
        return await addItemToCart(check.id, cart);
    } catch (error) {
    }
};

export const deleteCartItemService = async (detailCart: DetailCart) => {
    try {
        const checkReceiptData = await checkReceipt(detailCart);
        if (!checkReceiptData) {
            throw new Error('No matching receipt found for deletion');
        }
        const data = await prisma.cart.delete({
            where: {
                id: detailCart.id,
                receipt_id: checkReceiptData.id,
                item_id: detailCart.item_id
            }
        });
        return data;
    } catch (error) {
        throw new Error();
    }
}

export const getCartItemService = async(userid: number) => {
    try {
        const checkReciept = await checkReceiptById(userid);
        if(!checkReceipt) {
            // throw new Error('No matching receipt found for deletion');
            // return null;
        }
        const getCartItem = await prisma.cart.findMany({
            where: {
                receipt_id: checkReciept?.id
            }, include: {
                items: true
            }
        });
        return getCartItem;
    } catch (error) {
        
    }
}