export interface TokenState {
    login?: boolean,
    access_token: string,
    refresh_token: string
}
export interface UserProfile {
    name: string,
    email: string,
    phone_number: string,
    userProfile?: {
        seller?: number,
        profile_img?: string,
        home_address?: string,
        birthday?: string
    }
}