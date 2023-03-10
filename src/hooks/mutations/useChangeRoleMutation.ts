import { useMutation } from 'react-query'

import { ApiError } from '@/types/api/axios.types'

import { UserService } from '@/services/userService'

import notificationStore from '@/store/notification.store'

export interface ChangeRoleArgs {
	id: string
	role: string
}

export const useChangeRoleMutation = (username: string) => {
	const { mutate: changeRole, ...props } = useMutation(
		['change role'],
		(data: ChangeRoleArgs) => UserService.changeRole(data),
		{
			onSuccess: () => {
				notificationStore.success(`User "${username}" got a new role`)
			},
			onError: (error: ApiError) => {
				notificationStore.error(error.response.data.message)
			},
		}
	)
	return { changeRole, ...props }
}
