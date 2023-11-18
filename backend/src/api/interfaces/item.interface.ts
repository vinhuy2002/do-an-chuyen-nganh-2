import { Image } from "./image.interface";
import { Comment } from "./comment.interface";

export interface Item {
    category_id: number,
    item_name: string,
    description: String,
    price: number,
    quantity: number,
    option?: string,
    images: Image,
    comment: Comment,
    cart: [],
}