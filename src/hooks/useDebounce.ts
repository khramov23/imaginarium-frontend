import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<string>(value)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(timeout)
		}
	}, [value, delay])

	return debouncedValue
}
