export interface CustomeRefreshToken extends Request {
    token: string
}

export interface ResetEmail {
    email: string
}

export interface UpdatePassword {
    email: string,
    password: string
}