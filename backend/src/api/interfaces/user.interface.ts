export interface User{
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
    user_id: number,
    seller?: number,
    profile_img?: string,
    home_address?: string,
    birthday?: Date
}