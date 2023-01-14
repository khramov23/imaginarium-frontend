import axios from 'axios';


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
		config.headers.set(
			'Authorization',
			`Bearer ${localStorage.getItem('imaginarium-token')}`
		)
	return config
})
