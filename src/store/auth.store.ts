import { makeAutoObservable } from 'mobx'

import { AuthResponse, ILogin, IRegistration } from '@/types/api/auth.types'
import { IUser } from '@/types/api/user.types'

import { getRefreshEndpoint } from '@/http/api.paths'

import { AuthService } from '@/services/authService'
import { UserService } from '@/services/userService'

import notificationStore from '@/store/notification.store'

import { $api } from '@/http'

class AuthStore {
	user = {} as IUser
	isAuth = false
	isLoading = false

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(auth: boolean) {
		this.isAuth = auth
	}

	setUser(user: IUser) {
		this.user = user
	}

	setIsLoading(flag: boolean) {
		this.isLoading = flag
	}

	async updateMe() {
		try {
			const response = await UserService.fetchUserInfoById(this.user._id)
			this.setUser(response.data)
		} catch (e: any) {
			console.log(e.response?.data)
		}
	}

	async login(loginDto: ILogin) {
		this.setIsLoading(true)
		try {
			const response = await AuthService.login(loginDto)
			localStorage.setItem('imaginarium-token', response.data.accessToken)
			this.setIsLoading(false)
			this.setAuth(true)
			this.setUser(response.data.user)
			notificationStore.success('Successfully logged in')
		} catch (e) {
			this.setIsLoading(false)
			throw e
		}
	}

	async registration(registrationDto: IRegistration) {
		this.setIsLoading(true)
		try {
			const response = await AuthService.registration(registrationDto)
			localStorage.setItem('imaginarium-token', response.data.accessToken)
			this.setIsLoading(false)
			this.setAuth(true)
			this.setUser(response.data.user)
			notificationStore.success('Successfully registered')
		} catch (e) {
			this.setIsLoading(false)
			throw e
		}
	}

	async logout() {
		await AuthService.logout()
		localStorage.setItem('imaginarium-token', '')
		this.setAuth(false)
		this.setUser({} as IUser)
		notificationStore.success('Successfully logged out')
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
