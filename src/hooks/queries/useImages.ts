import { useInfiniteQuery } from 'react-query'

import { ImageService } from '@/services/imageService'

type ImageType = 'own' | 'favorites'

export const useImages = (type: ImageType, userId: string) => {
	const func = type === 'own' ? ImageService.getOwn : ImageService.getFavorites

	return useInfiniteQuery(
		['images', type, userId],
		({ pageParam = 0 }) => func(userId, pageParam).then((response) => response.data),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.length === 0) return undefined
				return allPages.length
			},
			enabled: false,
		}
	)
}
