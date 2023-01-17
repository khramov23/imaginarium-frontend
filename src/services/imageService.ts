import { AxiosResponse } from 'axios'

import { ImagesByPopularTags } from '@/components/screens/trending/Trending.types'

import { $api } from '@/http'
import { IImage } from '@/types/api/image.types'
import { ImageSearchFilter } from '@/types/image-search-filter.type'

export class ImageService {
	static async getAll(page: number) {
		return $api.get<IImage[]>(`/images?limit=5&page=${page}`)
	}

	static async getByAttribute(filter: ImageSearchFilter, page: number) {
		const { param, color } = filter
		let query = filter.query
		let response: AxiosResponse<IImage[]>

		if (param === 'title' && query) {
			response = await $api.get<IImage[]>(
				`/images/by-title/${query}?limit=5&page=${page}`
			)
		} else if (param === 'tag' && query) {
			response = await $api.get<IImage[]>(
				`/images/many-by-tag/${query}?limit=5&page=${page}`
			)
		} else if (param === 'color' && color) {
			query = color as string
			console.log(query)
			response = await $api.get<IImage[]>(
				`/images/by-color/${query}?limit=5&page=${page}`
			)
		} else {
			return this.getAll(page)
		}

		return response
	}

	static async getByPopularTags() {
		const response = await $api.get<ImagesByPopularTags>(`/images/by-tags`)
		return response.data
	}
}
