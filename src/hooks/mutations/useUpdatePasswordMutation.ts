import { useMutation } from 'react-query'

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
		}
	)
	return { update, ...props }
}
