import { useQuery } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { UserService } from '@/services/userService'

import notificationStore from '@/store/notification.store'

export const useUserInfo = (userId: string) => {
	return useQuery(
		['users', userId],
		() => UserService.fetchUserInfoById(userId!).then((response) => response.data),
		{
			onError: (error: ApiError) => {
				notificationStore.error(error.response.data.message)
			},
		}
	)
}
