import { useLayoutEffect, useState } from 'react'

const breakpoints = [
	'(max-width: 576px)',
	'(min-width: 576px) and (max-width: 768px)',
	'(min-width: 768px) and (max-width: 992px)',
	'(min-width: 992px) and (max-width: 1200px)',
	'(min-width: 1200px) and (max-width: 1500px)',
	'(min-width: 1501px)',
]

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type UseMatchMediaReturn = {
	[key in Breakpoint]: boolean
}

export const useMatchMedia = (): UseMatchMediaReturn => {
	const mediaQueryList = breakpoints.map((query) => matchMedia(query))

	const getValues = () => mediaQueryList.map((mql) => mql.matches)

	const [values, setValues] = useState(getValues())

	useLayoutEffect(() => {
		const handler = () => setValues(getValues())

		mediaQueryList.forEach((mql) => {
			mql.addEventListener('change', handler)
		})

		return () => {
			mediaQueryList.forEach((mql) => {
				mql.removeEventListener('change', handler)
			})
		}
	}, [])

	const arr: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

	return arr.reduce(
		(acc, cur, index) => ({
			...acc,
			[cur]: values[index],
		}),
		{} as UseMatchMediaReturn
	)
}
