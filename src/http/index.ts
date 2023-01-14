import axios from 'axios'

const $api = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_URL,
})

$api.interceptors.request.use((config) => {
	if (typeof config.headers?.set === 'function')
		config.headers.set(
			'Authorization',
			`Bearer ${localStorage.getItem('imaginarium-token')}`
		)
	return config
})

export default $api
