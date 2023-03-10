import { useMutation, useQueryClient } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { UserService } from '@/services/userService'

import authStore from '@/store/auth.store'
import notificationStore from '@/store/notification.store'

export const useSubscribeMutation = () => {
	const queryClient = useQueryClient()

	const { mutate: subscribe, ...last } = useMutation(
		'subscribe on user',
		(userId: string) => UserService.subscribe(userId),
		{
			onSuccess: () =>
				Promise.all([
					authStore.updateMe(),
					queryClient.invalidateQueries('users', {
						refetchInactive: true,
					}),
					queryClient.invalidateQueries('images', {
						refetchInactive: true,
					}),
				]),
			onError: (error: ApiError) => {
				notificationStore.error(error.response.data.message)
			},
		}
	)
	return { subscribe, ...last }
}
