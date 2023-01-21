import { useInfiniteQuery } from 'react-query'

import { ImageService } from '@/services/imageService'

export const useFeed = () => {
	return useInfiniteQuery(
		'fetch feed',
		({ pageParam = 0 }) =>
			ImageService.getFeed(pageParam).then((response) => response.data),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.length === 0) return undefined
				return allPages.length
			},
		}
	)
}
