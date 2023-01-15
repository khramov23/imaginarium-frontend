import { IRole } from '@/types/api/role.types'
import { IUser } from '@/types/api/user.types'

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
