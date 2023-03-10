import { AxiosResponse } from 'axios'

import { IImage } from '@/types/api/image.types'
import { ImageSearchFilter } from '@/types/image-search-filter.type'

import { ImagesByPopularTags } from '@/components/screens/trending/Trending.types'

import filterStore from '@/store/filter.store'

import { $api, $authApi } from '@/http'

export class ImageService {
	static async getAll(page: number) {
		return $api.get<IImage[]>(`/images?limit=${filterStore.limit}&page=${page}`)
	}

	static async getById(id: string): Promise<AxiosResponse<IImage>> {
		return $authApi.get<IImage>(`/images/by-id/${id}`)
	}

	static async getByAttribute(filter: ImageSearchFilter, page: number): Promise<AxiosResponse<IImage[]>> {
		const { param, color } = filter
		let query = filter.query
		let response: AxiosResponse<IImage[]>

		if (param === 'title' && query) {
			response = await $api.get<IImage[]>(
				`/images/by-title/${query}?limit=${filterStore.limit}&page=${page}`
			)
		} else if (param === 'tag' && query) {
			response = await $api.get<IImage[]>(
				`/images/many-by-tag/${query}?limit=${filterStore.limit}&page=${page}`
			)
		} else if (param === 'color' && color) {
			query = color as string
			console.log(query)
			response = await $api.get<IImage[]>(
				`/images/by-color/${query}?limit=${filterStore.limit}&page=${page}`
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

	static async getFavorites(userId: string, page: number): Promise<AxiosResponse<IImage[]>> {
		return $authApi.get<IImage[]>(`/images/favorites/${userId}?limit=${filterStore.limit}&page=${page}`)
	}

	static async getOwn(userId: string, page: number): Promise<AxiosResponse<IImage[]>> {
		return $authApi.get<IImage[]>(`/images/own/${userId}?limit=${filterStore.limit}&page=${page}`)
	}

	static async getFeed(page: number): Promise<AxiosResponse<IImage[]>> {
		console.log('getFeed')
		return $authApi.get<IImage[]>(`/images/feed?limit=${filterStore.limit}&page=${page}`)
	}

	static async like(id: string): Promise<AxiosResponse<IImage>> {
		return $authApi.post<IImage>(`/images/likes/${id}`)
	}

	static async upload(formData: FormData): Promise<AxiosResponse<IImage>> {
		return $authApi.post<IImage>(`/images`, formData)
	}

	static async delete(id: string): Promise<AxiosResponse<IImage>> {
		return $authApi.delete<IImage>(`/images/${id}`)
	}
}
