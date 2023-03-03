import { lazy } from 'react'

export const UploadPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./UploadPage'))
			}, 1000)
		})
)
