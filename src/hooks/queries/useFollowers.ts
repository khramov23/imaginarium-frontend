import { useQuery } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { UserService } from '@/services/userService'

import notificationStore from '@/store/notification.store'

export const useFollowers = (id: string) => {
	return useQuery(
		['users', 'followers', id],
		() => UserService.getFollowers(id).then((response) => response.data),
		{
			enabled: false,
			onError: (error: ApiError) => {
				notificationStore.error(error.response.data.message)
			},
		}
	)
}
