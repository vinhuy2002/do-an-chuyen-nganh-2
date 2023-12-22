    export interface Cart {
    recipet_id?: number,
    user_id: number,
    item_id: number,
    quantity: number,
}

export interface DetailCart {
    id: number,
    user_id: number,
    receipt_id?: number,
    item_id: number,
    quantity: number,
}
