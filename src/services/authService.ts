import { AxiosResponse } from 'axios'

import $api from '@/http'
import { AuthResponse, ILogin, IRegistration } from '@/types/auth.types'

export class AuthService {
	static async login(login: ILogin): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/login', login)
	}

	static async register(
		registration: IRegistration
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/registration', registration)
	}

	static async logout(): Promise<void> {
		return $api.post('/refresh')
	}
}
