
import { Comment } from "./comment.interface";

export interface Item {
    id?: number,
    user_id: number,
    category_id: number,
    item_name: string,
    description: string,
    price: number,
    quantity: number,
    option?: string,
    images?: {
        image_name: any,
    },
    comment?: Comment,
}