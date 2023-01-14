import { makeAutoObservable } from 'mobx'

import { AuthService } from '@/services/authService'

import {AuthResponse, ILogin, IRegistration} from '@/types/auth.types'
import { IUser } from '@/types/user.types'
import axios from "axios";
import {$api} from "@/http";
import {getRefreshEndpoint} from "@/http/api.paths";

class AuthStore {
	user = {} as IUser
	isAuth = false

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(auth: boolean) {
		this.isAuth = auth
	}

	setUser(user: IUser) {
		this.user = user
	}

	async login(loginDto: ILogin) {
		try {
			const response = await AuthService.login(loginDto)
			localStorage.setItem('imaginarium-token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
			console.log(response)
		} catch (e: any) {
			console.log(e.response?.data)
		}
	}

	async registration(registrationDto: IRegistration) {
		try {
			const response = await AuthService.registration(registrationDto)
			localStorage.setItem('imaginarium-token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
			console.log(response)
		} catch (e: any) {
			console.log(e.response?.data)
		}
	}

	async logout() {
		try {
			const response = await AuthService.logout()
			localStorage.setItem('imaginarium-token', '')
			this.setAuth(false)
			this.setUser({} as IUser)
		} catch (e: any) {
			console.log(e.response?.data)
		}
	}

	async checkAuth() {
		try {
			const response = await $api.get<AuthResponse>(getRefreshEndpoint())
			localStorage.setItem('imaginarium-token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data)
		}
	}
}

export default new AuthStore()
