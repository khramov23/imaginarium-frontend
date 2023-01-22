import { makeAutoObservable } from 'mobx'

import { AuthResponse, ILogin, IRegistration } from '@/types/api/auth.types'
import { IUser } from '@/types/api/user.types'

import { getRefreshEndpoint } from '@/http/api.paths'

import { AuthService } from '@/services/authService'
import { UserService } from '@/services/userService'

import { $api } from '@/http'

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

	async updateMe() {
		try {
			const response = await UserService.fetchUserById(this.user._id)
			this.setUser(response.data)
		} catch (e: any) {
			console.log(e.response?.data)
		}
	}

	async login(loginDto: ILogin) {
		const response = await AuthService.login(loginDto)
		localStorage.setItem('imaginarium-token', response.data.accessToken)
		this.setAuth(true)
		this.setUser(response.data.user)
	}

	async registration(registrationDto: IRegistration) {
		const response = await AuthService.registration(registrationDto)
		localStorage.setItem('imaginarium-token', response.data.accessToken)
		this.setAuth(true)
		this.setUser(response.data.user)
	}

	async logout() {
		await AuthService.logout()
		localStorage.setItem('imaginarium-token', '')
		this.setAuth(false)
		this.setUser({} as IUser)
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
