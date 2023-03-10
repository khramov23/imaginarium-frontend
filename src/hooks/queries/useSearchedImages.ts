import { useInfiniteQuery } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { ImageService } from '@/services/imageService'

import filterStore from '@/store/filter.store'
import notificationStore from '@/store/notification.store'

export const useSearchedImages = (query: string) => {
	return useInfiniteQuery(
		['images', filterStore.param, query, filterStore.color],
		({ pageParam = 0 }) =>
			ImageService.getByAttribute(
				{
					query: filterStore.query,
					param: filterStore.param,
					color: filterStore.color,
				},
				pageParam
			).then((response) => response.data),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.length === 0) return undefined
				return allPages.length
			},
			onError: (error: ApiError) => {
				notificationStore.error(error.response.data.message)
			},
		}
	)
}
