export interface Comment{
    item_id: number,
    user_id: number,
    comment: string,
    commented_date: Date
}

export interface DeleteComment{
    id: number,
    item_id: number,
    user_id: number,
}