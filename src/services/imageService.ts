import { AxiosResponse } from 'axios'

import { ImagesByPopularTags } from '@/components/screens/trending/Trending.types'

import { $api } from '@/http'
import { IImage } from '@/types/api/image.types'
import { ImageSearchFilter } from '@/types/image-search-filter.type'

export class ImageService {
	static async getAll() {
		return $api.get<IImage[]>(`/images`)
	}

	static async getByAttribute(filter: ImageSearchFilter) {
		const { query, param } = filter
		let response: AxiosResponse<IImage[]>

		if (!query) return this.getAll()

		if (param === 'title') {
			response = await $api.get<IImage[]>(`/images/by-title/${query}`)
		} else if (param === 'tag') {
			response = await $api.get<IImage[]>(`/images/many-by-tag/${query}`)
		} else if (param === 'color') {
			response = await $api.get<IImage[]>(`/images/by-color/${query}`)
		} else {
			return this.getAll()
		}

		return response
	}

	static async getByPopularTags() {
		const response = await $api.get<ImagesByPopularTags>(`/images/by-tags`)
		return response.data
	}
}
