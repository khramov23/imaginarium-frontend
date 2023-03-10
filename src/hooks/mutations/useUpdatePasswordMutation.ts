import { useMutation } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { UserService } from '@/services/userService'

import notificationStore from '@/store/notification.store'

export interface UpdatePasswordArgs {
	oldPassword: string
	newPassword: string
}

export const useUpdatePasswordMutation = () => {
	const { mutate: update, ...props } = useMutation(
		['update password'],
		(data: UpdatePasswordArgs) => UserService.updatePassword(data),
		{
			onSuccess: () => {
				notificationStore.success('Password successfully changed')
			},
			onError: (error: ApiError) => {
				notificationStore.error(error.response.data.message)
			},
		}
	)
	return { update, ...props }
}
