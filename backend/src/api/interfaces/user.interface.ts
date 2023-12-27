export interface User {
    id?: number,
    name: string,
    username: string,
    password: string,
    email: string,
    phone_number: string,
    created_time: Date
}

export interface Login {
    username: string,
    password: string,
}

export interface genTokenInfo {
    id: number,
    username: string
}

export interface AdditionalInfo {
    name: string,
    email: string,
    phone_number: string,
    user_id: number,
    seller?: number,
    profile_img?: ImgInfo,
    home_address?: string,
    birthday?: Date
}

export interface ImgInfo {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    buffer: any,
    size: number
}