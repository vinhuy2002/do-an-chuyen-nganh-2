export interface Category {
    id: number,
    category_name: string,
    description: string
}
export interface Item {
    id: number,
    category_id: number,
    user_id: 1,
    item_name: string,
    description: string,
    price: number,
    quantity: number,
    option: string,
    image_name: string[]
}
export interface Categoryname {
    category_name: string,
}