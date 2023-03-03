import { lazy } from 'react'

export const FeedPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./FeedPage'))
			}, 1000)
		})
)
