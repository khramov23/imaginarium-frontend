import { lazy } from 'react'

export const GalleryPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./GalleryPage'))
			}, 1000)
		})
)
