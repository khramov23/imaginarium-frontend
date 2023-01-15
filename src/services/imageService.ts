import { ImagesByPopularTags } from '@/components/screens/trending/Trending.types'

import { $api } from '@/http'
import { IImage } from '@/types/api/image.types'

export class ImageService {
	static async getAll() {
		const response = await $api.get<IImage[]>(`/images`)
		return response
	}

	static async getByPopularTags() {
		const response = await $api.get<ImagesByPopularTags>(`/images/by-tags`)
		return response.data
	}
}
