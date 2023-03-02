import axios from 'axios'

import { AuthResponse } from '@/types/api/auth.types'

import { getRefreshEndpoint } from '@/http/api.paths'

export const $authApi = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL,
})

export const $api = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL,
})

$authApi.interceptors.request.use((config) => {
	if (typeof config.headers?.set === 'function')
		config.headers.set('Authorization', `Bearer ${localStorage.getItem('imaginarium-token')}`)
	return config
})

$authApi.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true
			try {
				const response = await $api.get<AuthResponse>(getRefreshEndpoint())
				localStorage.setItem('imaginarium-token', response.data.accessToken)
				return $authApi.request(originalRequest)
			} catch (e) {
				console.log('Not authorized')
			}
		}
		throw error
	}
)
