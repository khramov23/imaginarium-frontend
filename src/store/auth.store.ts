import { makeAutoObservable } from 'mobx'

import { AuthService } from '@/services/authService'

import { ILogin, IRegistration } from '@/types/auth.types'
import { IUser } from '@/types/user.types'

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

	async login(login: ILogin) {
		try {
			const response = await AuthService.login(login)
			localStorage.setItem('imaginarium-token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data?.message)
		}
	}

	async register(register: IRegistration) {
		try {
			const response = await AuthService.register(register)
			localStorage.setItem('imaginarium-token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data?.message)
		}
	}

	async logout() {
		try {
			const response = await AuthService.logout()
			localStorage.setItem('imaginarium-token', '')
			this.setAuth(false)
			this.setUser({} as IUser)
		} catch (e: any) {
			console.log(e.response?.data?.message)
		}
	}
}

export default new AuthStore()
