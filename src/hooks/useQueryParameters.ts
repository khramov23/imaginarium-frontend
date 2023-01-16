import { useLocation } from 'react-router-dom'

export const useQueryParameters = () => {
	const { search } = useLocation()

	const result = {} as any

	const parts = search.slice(1).split('&')
	parts.forEach((part) => {
		const temp = part.split('=')
		result[temp[0]] = temp[1]
	})

	return result
}
