import axios from 'axios'

import { ImagesByPopularTags } from '@/components/screens/trending/Trending.types'

import { Image } from '@/types/api/image.types'

export class ImageService {
	static async getAll() {
		const response = await axios.get<Image[]>(
			`${process.env.REACT_APP_API_URL}/images`
		)
		return response.data
	}

	static async getByPopularTags() {
		const response = await axios.get<ImagesByPopularTags>(
			`${process.env.REACT_APP_API_URL}/images/by-tags`
		)
		return response.data
	}
}
