import { lazy } from 'react'

export const UsersPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./UsersPage'))
			}, 1000)
		})
)
