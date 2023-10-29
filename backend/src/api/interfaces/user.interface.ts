export interface User{
    id?: number
    username: string,
    password: string,
    email: string,
    phoneNumber: string,
    dateOfBirth: Date
}

export interface Login {
    username: string,
    password: string,
}