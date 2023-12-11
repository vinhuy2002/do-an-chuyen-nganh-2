export interface Cart {
    item_id: number,
    quantity: number
}

export interface CartItemDetail {
    id: number
    receipt_id: number,
    item_id: number,
    quantity: number,
    items: {
        id: number,
        category_id: number,
        user_id: number,
        item_name: string,
        description: string,
        price: number,
        quantity: number,
        option: any,
        image_name: string[]
    }
}