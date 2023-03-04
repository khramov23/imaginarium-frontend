import { useInfiniteQuery } from 'react-query'

import { ImageService } from '@/services/imageService'

import authStore from '@/store/auth.store'

export const useFeed = () => {
	return useInfiniteQuery(
		['images', 'feed', authStore.user._id],
		({ pageParam = 0 }) => ImageService.getFeed(pageParam).then((response) => response.data),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.length === 0) return undefined
				return allPages.length
			},
		}
	)
}
