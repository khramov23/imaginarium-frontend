import { useMutation, useQueryClient } from 'react-query'

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
		}
	)

	return { upload, ...props }
}
