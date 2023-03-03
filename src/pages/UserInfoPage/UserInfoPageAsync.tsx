import { lazy } from 'react'

export const UserInfoPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./UserInfoPage'))
			}, 1000)
		})
)
