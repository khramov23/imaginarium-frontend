import { AxiosResponse } from 'axios'

import {$api, $authApi} from '@/http'
import { AuthResponse, ILogin, IRegistration } from '@/types/auth.types'
import {getLoginEndpoint, getLogoutEndpoint, getRegistrationEndpoint} from "@/http/api.paths";

export class AuthService {
	static async login(loginDto: ILogin): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>(getLoginEndpoint(), loginDto)
	}

	static async registration(
		registrationDto: IRegistration
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>(getRegistrationEndpoint(), registrationDto)
	}

	static async logout(): Promise<void> {
		return $authApi.post(getLogoutEndpoint())
	}
}
