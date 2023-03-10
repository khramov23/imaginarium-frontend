import { useMutation, useQueryClient } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { UserService } from '@/services/userService'

import authStore from '@/store/auth.store'
import notificationStore from '@/store/notification.store'

export const useAvatarMutation = () => {
	const queryClient = useQueryClient()

	const { mutate: upload, ...props } = useMutation(
		'upload image',
		(data: FormData) => UserService.addAvatar(data).then((response) => response.data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users', {
					refetchInactive: true,
				})
				authStore.checkAuth()
				notificationStore.success('Avatar uploaded successfully')
			},
			onError: (error: ApiError) => {
				notificationStore.error(error.response.data.message)
			},
		}
	)

	return { upload, ...props }
}
