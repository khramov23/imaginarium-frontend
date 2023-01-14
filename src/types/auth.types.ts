import {IRole} from "@/types/role.types";
import {IUser} from "@/types/user.types";

export interface InfoFromToken {
    _id: string
    role: IRole
    isActivated: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface ILogin {
    email: string
    password: string
}

export interface IRegistration extends ILogin {
    username: string
}

export interface AuthResponse extends ITokens {
    user: IUser
}

