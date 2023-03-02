import { useMutation } from 'react-query'

import { UserService } from '@/services/userService'

export interface UpdatePasswordArgs {
	oldPassword: string
	newPassword: string
}

export const useUpdatePasswordMutation = () => {
	const { mutate: update, ...props } = useMutation(['update password'], (data: UpdatePasswordArgs) =>
		UserService.updatePassword(data)
	)
	return { update, ...props }
}
